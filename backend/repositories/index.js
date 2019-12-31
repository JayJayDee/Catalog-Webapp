const { initDynamoDB } = require('./dynamodb');
const { log } = require('../logger');
const catalogRepository = require('./catalog-repository');

const tag = '[repositories]';

const initRepositories =
  async () => {
    log.info(`${tag} initializing repositories..`);
    await initDynamoDB();
    log.info(`${tag} repositories initialized.`);
  };

module.exports = {
  initRepositories,
  catalogRepository
};
