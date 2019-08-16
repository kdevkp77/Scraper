const bunyan = require('bunyan');
const path = require('path');

const logger = bunyan.createLogger({
  name: 'scrap',
  streams: [
    {
      level: 'debug',
      stream: process.stdout, // log INFO and above to stdout
    },
    {
      type: 'rotating-file',
      level: 'info',
      // log INFO and above to a file
      path: `${path.join(__dirname, '../logs')}/logs.json`,
      period: '1d', // daily rotation
      count: 30, // keep 30 back copies
    },
    {
      type: 'rotating-file',
      level: 'error',
      // log ERROR and above to a file
      path: `${path.join(__dirname, '../logs')}/error.json`,
      period: '1d', // daily rotation
      count: 30, // keep 30 back copies
    },
  ],
  outputCapture: 'std',
});

module.exports = logger;
