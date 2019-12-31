const { client } = require('./dynamodb');

const little = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms));

const queryCatalog =
  async (catalogId) => {
    await little(1500); // TEST-PURPOSE
    const catalog =
      await client.doc().get({
        TableName: 'catalogs',
        Key: {
          id: catalogId
        }
      }).promise();

    if (!catalog.Item) return null;
    return catalog.Item;
  };

module.exports = {
  queryCatalog
};