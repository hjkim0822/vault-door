// src/modules/msTeams/routes/msTeamsRoutes.js
const express = require('express');
const router = express.Router();
const sqmsController = require('../controllers/sqmsController');

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

router.post('/sqms', sqmsController.handleAnomaly);
router.post('/sqms/incident', sqmsController.handleIncident);
router.post('/sqms/alert', sqmsController.handleAlert); 

module.exports = router;