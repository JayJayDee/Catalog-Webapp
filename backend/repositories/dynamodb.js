const { config, DynamoDB } = require('aws-sdk');

const { AWSConfig } = require('../configurations');
const { log } = require('../logger');

const tag = '[dynamodb]';

const dynamoDBTables = () => [
  {
    TableName: 'catalogs',
    BillingMode: 'PAY_PER_REQUEST',
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

    console.log(createToBe);
  };

module.exports = {
  initDynamoDB,
  client
};