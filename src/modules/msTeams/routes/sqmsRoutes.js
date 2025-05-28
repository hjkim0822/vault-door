// src/modules/msTeams/routes/msTeamsRoutes.js
const express = require('express');
const router = express.Router();
const sqmsController = require('../controllers/sqmsControllers');

// // POST webhook from MS Teams
// router.post('/webhook', sqmsController.handleWebhook);

// // GET status
// router.get('/status', (req, res) => {
//   res.json({ message: 'MS Teams module is active' });
// });

/*
  4 Alerts
  1. 이상징후
  2. 장애
  3. 작업

  3 Active Route
  POST /sqms - 이상징후
  POST /sqms/incident - 장애
  POST /sqms/anomaly - Something
*/

router.post('/', sqmsController.handleAnomaly);
router.post('/incident', sqmsController.handleIncident);
router.post('/alert', sqmsController.handleAlert); 

module.exports = router;