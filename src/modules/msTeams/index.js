const express = require('express');
const router = express.Router();

// Import msTeams routes
const sqmsRoutes = require('./routes/sqmsRoutes');

// Optionally: You can attach middleware specific to this module
// const authMiddleware = require('../../middlewares/auth');
// router.use(authMiddleware);

// Mount routes: All routes will be available under /api/teams
router.use('/sqms', sqmsRoutes);

module.exports = router;