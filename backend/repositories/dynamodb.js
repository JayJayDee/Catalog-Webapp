const { config, DynamoDB } = require('aws-sdk');

const { AWSConfig } = require('../configurations');
const { log } = require('../logger');

const tag = '[dynamodb]';

const dynamoDBTables = () => [
  {
    TableName: 'catalogs',
    BillingMode: 'PAY_PER_REQUEST',
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S'
      }
    ],
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH'
      }
    ]
  }
];

const client = {
  doc: () => new DynamoDB.DocumentClient(),
  root: () => new DynamoDB()
};

const initDynamoDB =
  async () => {
    log.info(`${tag} inspecting DynamoDB..`);
    config.update(AWSConfig());
    await inspectDynamoDB();
    log.info(`${tag} DynamoDB ok.`);
  };

const inspectDynamoDB =
  async () =>  {
    const listTablesResp =
      await client.root()
        .listTables().promise();

    const existTables = dynamoDBTables();
    const createToBe =
      existTables.filter((t) =>
        !listTablesResp.TableNames.includes(t.TableName));

    if (createToBe.length > 0) {
      const creationTableNames =
        createToBe.map((t) => t.TableName).join(',');

      log.info(`${tag} table(s) not found: ${creationTableNames}, will be created..`);

      const promises =
        createToBe.map((t) =>
          client.root().createTable(t).promise());

      await Promise.all(promises);
      log.info(`${tag} table(s) created: ${creationTableNames}`);
    }
  };

module.exports = {
  initDynamoDB,
  client
};