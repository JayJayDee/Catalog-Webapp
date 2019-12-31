const { config, DynamoDB } = require('aws-sdk');
const { AWSConfig } = require('../configurations');

const client = {
  doc: () => new DynamoDB.DocumentClient(),
  root: () => new DynamoDB()
};

const initDynamoDB =
  async () => {
    config.update(AWSConfig());
  };

module.exports = {
  initDynamoDB,
  client
};