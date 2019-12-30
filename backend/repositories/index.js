const { mySQLConfig } = require('../configurations');
const { log } = require('../logger');

const { initMySQL } = require('./init-mysql');

const { 
  initModels,
  Project
} = require('./models');

const tag = '[repository]';

const initRepositories =
  async () => {
    log.info(`${tag} initializing repositories..`);

    const sequelize = await initMySQL(mySQLConfig());
    initModels({ sequelize });

    log.info(`${tag} repositories initialized.`);
  };

module.exports = {
  initRepositories,
  Project,
};
