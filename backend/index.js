require('dotenv/config');
const express = require('express');
const cors = require('cors');

const { initRepositories } = require('./repositories');
const { initAppEndpoints } = require('./app-endpoints');
const { initLogger, log } = require('./logger');
const { httpConfig } = require('./configurations');

const tag = '[backend]';

(async () => {
  initLogger();
  await initRepositories();

  const app = express();

  app.use(cors());
  app.use('/', initAppEndpoints());

  const httpConf = httpConfig();

  app.listen(httpConf.port, () => {
    log.info(`${tag} backend server started, port: ${httpConf.port}`);
  });
})();