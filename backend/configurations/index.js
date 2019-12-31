
const mandantory = (key) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`configuration not supplied: ${key}`);
  }
  return value;
}

// const optional = (key, defaultValue) => {
//   const value = process.env[key];
//   if (!value) {
//     return defaultValue;
//   }
//   return value;
// }

const AWSConfig = () => ({
  accessKeyId: mandantory('AWS_ACCESS_KEY_ID'),
  secretAccessKey: mandantory('AWS_SECRET_ACCESS_KEY'),
  region: mandantory('AWS_REGION')
});

const httpConfig = () => ({
  port: mandantory('HTTP_PORT')
});

module.exports = {
  AWSConfig,
  httpConfig
};
