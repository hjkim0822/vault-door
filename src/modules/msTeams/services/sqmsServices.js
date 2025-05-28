const logger = require('../../../config/logger');
// const db = require('../../../lib/db'); // example: DB client or model

/**
 * Process incoming webhook payload from MS Teams.
 * @param {Object} payload - The webhook body received from Teams
 * @returns {Object} Result of processing
 */
exports.processWebhook = async (payload) => {
  logger.debug('Processing MS Teams webhook:', payload);

  if (!payload || !payload.text || !payload.from) {
    logger.warn('Invalid payload received from MS Teams webhook');
    throw new Error('Invalid MS Teams webhook payload');
  }

  // Optionally store to DB
  // await db.saveWebhookPayload(payload);

  // Example: Transform message or trigger a response
  const processed = {
    sender: payload.from.name,
    message: payload.text,
    processedAt: new Date().toISOString()
  };

  logger.info('Webhook successfully processed', processed);
  return processed;
};

/**
 * Optional utility function to validate payload structure.
 */
exports.validatePayload = (payload) => {
  return payload && typeof payload.text === 'string' && payload.from;
};

/**
 * Optional function to send outbound message (e.g., via MS Teams webhook URL).
 */
exports.sendResponseToTeams = async (webhookUrl, messageObj) => {
  const axios = require('axios');

  try {
    const res = await axios.post(webhookUrl, messageObj);
    logger.info('Successfully sent message to MS Teams:', res.status);
    return res.data;
  } catch (error) {
    logger.error('Failed to send message to MS Teams:', error);
    throw error;
  }
};