const logger = require('./app/lib/logger');
const scheduler = require('./app/routes');

process.on('uncaughtException', err => {
  logger.error('uncaughtException Thrown', err);
  process.exit(1);
});

scheduler.scrap.scrap();
