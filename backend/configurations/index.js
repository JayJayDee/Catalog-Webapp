
const mandantory = (key) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`configuration not supplied: ${key}`);
  }
  return value;
}

const optional = (key, defaultValue) => {
  const value = process.env[key];
  if (!value) {
    return defaultValue;
  }
  return value;
}

const mySQLConfig = () => ({
  host: mandantory('MYSQL_HOST'),
  port: mandantory('MYSQL_PORT'),
  database: mandantory('MYSQL_DATABASE'),
  username: mandantory('MYSQL_USER'),
  password: mandantory('MYSQL_PASSWORD'),
  pool: {
    max: optional('MYSQL_POOL_SIZE', 10),
    min: 5
  }
});

module.exports = {
  mySQLConfig
};
