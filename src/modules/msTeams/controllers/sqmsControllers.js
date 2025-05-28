const sqmsService = require('../services/sqmsServices');

exports.handleAnomaly = async (req, res) => {
  console.log('[MS Teams Webhook Body]', req.body);
  // Or if using winston:
  // logger.info('[MS Teams Webhook Body]', req.body);

  return res.status(200).json({
    success: true,
    message: 'Webhook received',
  });
};

exports.handleIncident = async (req, res) => {
  console.log('[MS Teams Webhook Body]', req.body);
  // Or if using winston:
  // logger.info('[MS Teams Webhook Body]', req.body);

  return res.status(200).json({
    success: true,
    message: 'Webhook received',
  });
};

exports.handleAlert = async (req, res) => {
  console.log('[MS Teams Webhook Body]', req.body);
  // Or if using winston:
  // logger.info('[MS Teams Webhook Body]', req.body);

  return res.status(200).json({
    success: true,
    message: 'Webhook received',
  });
};