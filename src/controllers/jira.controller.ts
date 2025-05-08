import { Request, Response } from 'express';
import { processJiraEvent } from '../services/jira.service';

export const handleJiraWebhook = async (req: Request, res: Response): Promise<void> => {
  try {
    const payload = req.body;
    const eventType = payload.webhookEvent;

    await processJiraEvent(eventType, payload);
    
    res.status(200).send('Webhook processed');
  } catch (error) {
    console.error('Error processing Jira webhook:', error);
    res.status(500).send('Error processing webhook');
  }
}