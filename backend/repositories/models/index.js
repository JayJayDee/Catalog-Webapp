const { Project, initProject } = require('./project-model');

const initModels =
  ({ sequelize }) => {
    initProject({ sequelize });
  };

module.exports = {
  initModels,
  Project
};
