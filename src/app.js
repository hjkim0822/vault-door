const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const msTeamsModule = require('./modules/msTeams');
const logger = require('./config/logger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('combined', {
  stream: {
    write: (message) => logger.http(message.trim())
  }
}));

// Mount feature modules
app.use('/api', msTeamsModule);

module.exports = app;