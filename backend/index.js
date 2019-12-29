require('dotenv/config');

const { initRepositories } = require('./repositories');
const { initLogger, log } = require('./logger');

const tag = '[server]';

(async () => {
  initLogger();
  await initRepositories();

  log.info(`${tag} server started`);
})();