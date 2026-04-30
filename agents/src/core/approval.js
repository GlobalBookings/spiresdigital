import express from 'express';
import { createLogger } from './logger.js';
import { sendSlack, slackSection } from './slack.js';

const log = createLogger('approval');
const PORT = parseInt(process.env.APPROVAL_PORT || '3100');

let serverStarted = false;

export function startApprovalServer() {
  if (serverStarted) return;
  serverStarted = true;

  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get('/health', (req, res) => {
    res.json({ status: 'ok', service: 'spiresdigital-agents' });
  });

  const triggerHandlers = {};

  app.post('/trigger/:agent', async (req, res) => {
    const agent = req.params.agent;
    const handler = triggerHandlers[agent];
    if (!handler) {
      res.status(404).json({ error: `Unknown agent: ${agent}` });
      return;
    }
    res.json({ status: 'triggered', agent });
    try {
      await handler();
    } catch (err) {
      log.error(`Triggered ${agent} failed: ${err.message}`);
    }
  });

  app.listen(PORT, () => {
    log.info(`Server listening on port ${PORT}`);
  });

  return {
    registerTrigger: (name, fn) => { triggerHandlers[name] = fn; },
    getApp: () => app,
  };
}
