import { Router } from 'express';
import { handleJiraWebhook } from '../controllers/jira.controller';

const router = Router();

// POST /api/jira/event
router.post('/event', handleJiraWebhook);

export default router;
