const { Model, STRING, INTEGER } = require('sequelize');

class Project extends Model {}

const modelName = 'project';

const initProject = ({ sequelize }) =>
  Project.init({
    id: {
      type: INTEGER,
      primaryKey: true,
    },
    title: {
      type: STRING(40),
    }
  }, {
    sequelize,
    underscored: true,
    modelName
  });

module.exports = {
  Project,
  initProject
};