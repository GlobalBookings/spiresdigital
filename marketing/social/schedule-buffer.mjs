import { campaign, campaignPosts, validateCampaign } from './buffer-campaign-2026-q3.mjs';

const apply = process.argv.includes('--apply');
const token = process.env.BUFFER_API_KEY;
const skippedServices = new Set((process.env.BUFFER_SKIP_SERVICES || '').split(',').map(value => value.trim()).filter(Boolean));
const validationErrors = validateCampaign();
if (validationErrors.length) {
  console.error(JSON.stringify({ validationErrors }, null, 2));
  process.exit(1);
}

const summary = campaignPosts.reduce((result, post) => {
  result[post.service] = (result[post.service] || 0) + 1;
  return result;
}, {});

if (!apply) {
  console.log(JSON.stringify({ campaign, total: campaignPosts.length, byChannel: summary, first: campaignPosts[0], last: campaignPosts.at(-1) }, null, 2));
  process.exit(0);
}

if (!token) throw new Error('BUFFER_API_KEY is required with --apply');

async function request(query, variables = {}) {
  const response = await fetch('https://api.buffer.com', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  const body = await response.json();
  if (!response.ok || body.errors) throw new Error(JSON.stringify({ status: response.status, body }));
  return body.data;
}

const existingData = await request(`
  query ExistingScheduled($organizationId: OrganizationId!) {
    posts(first: 100, input: {
      organizationId: $organizationId
      filter: { status: [scheduled, needs_approval, draft] }
      sort: [{ field: dueAt, direction: asc }]
    }) {
      edges { node { id text dueAt channelId status } }
    }
  }
`, { organizationId: campaign.organizationId });

const existing = existingData.posts.edges.map(({ node }) => node);
const results = [];

function channelMetadata(service) {
  if (service === 'facebook') return { facebook: { type: 'post' } };
  if (service === 'instagram') {
    return { instagram: { type: 'post', shouldShareToFeed: true, isAiGenerated: true } };
  }
  return undefined;
}

function createInput(post, saveToDraft = false) {
  const input = {
    text: post.text,
    channelId: post.channelId,
    schedulingType: 'automatic',
    mode: saveToDraft ? 'addToQueue' : 'customScheduled',
    assets: post.assets,
    metadata: channelMetadata(post.service),
    aiAssisted: true,
    source: 'codex',
  };
  if (saveToDraft) input.saveToDraft = true;
  else input.dueAt = post.dueAt;
  return input;
}

async function createBufferPost(input) {
  const data = await request(`
    mutation CreatePost($input: CreatePostInput!) {
      createPost(input: $input) {
        __typename
        ... on PostActionSuccess {
          post { id text dueAt channelId status assets { id mimeType } }
        }
        ... on MutationError { message }
      }
    }
  `, { input });
  return data.createPost;
}

for (const post of campaignPosts) {
  if (skippedServices.has(post.service)) {
    results.push({ key: post.key, action: 'blocked', message: 'Channel connection rejected API publishing and requires reconnection in Buffer.' });
    continue;
  }
  const duplicate = existing.find(item => item.channelId === post.channelId && (item.dueAt === post.dueAt || item.text === post.text));
  if (duplicate) {
    results.push({ key: post.key, action: 'skipped', id: duplicate.id, status: duplicate.status });
    continue;
  }

  try {
    let payload = await createBufferPost(createInput(post));
    let action = 'created';
    if (payload.__typename === 'LimitReachedError') {
      payload = await createBufferPost(createInput(post, true));
      action = 'drafted';
    }
    if (payload.__typename !== 'PostActionSuccess') {
      results.push({ key: post.key, action: 'failed', type: payload.__typename, message: payload.message });
      continue;
    }
    existing.push(payload.post);
    results.push({ key: post.key, action, id: payload.post.id, dueAt: payload.post.dueAt, intendedDueAt: post.dueAt, status: payload.post.status, assets: payload.post.assets.length });
  } catch (error) {
    results.push({ key: post.key, action: 'failed', type: 'RequestError', message: error.message });
  }
}

console.log(JSON.stringify({
  campaign: campaign.id,
  total: campaignPosts.length,
  created: results.filter(item => item.action === 'created').length,
  drafted: results.filter(item => item.action === 'drafted').length,
  skipped: results.filter(item => item.action === 'skipped').length,
  blocked: results.filter(item => item.action === 'blocked').length,
  failed: results.filter(item => item.action === 'failed').length,
  results,
}, null, 2));
