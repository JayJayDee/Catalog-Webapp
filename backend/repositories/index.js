const { initMySQL } = require('./init-mysql');
const { Project, initProject } = require('./project-repository');

const initRepositories =
  async () => {
    const sequelize = await initMySQL({
      // host: 
    });

    initProject({ sequelize });
  };

module.exports = {
  initRepositories,
  Project,
};
