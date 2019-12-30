const { Sequelize } = require('sequelize');

const initMySQL =
  async ({ conf }) =>
    new Sequelize({
      ...conf,
      dialect: 'mysql'
    });

module.exports = {
  initMySQL
};