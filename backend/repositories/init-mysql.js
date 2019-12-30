const { Sequelize } = require('sequelize');

const initMySQL =
  async (conf) => {
    const sequelize = new Sequelize({
      ...conf,
      dialect: 'mysql'
    });
    await sequelize.authenticate();
    return sequelize;
  };

module.exports = {
  initMySQL
};