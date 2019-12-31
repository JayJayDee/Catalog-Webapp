const { catalogRepository } = require('../repositories');

const catalog =
  () => ([
    {
      uri: '/catalog/:catalogId',
      method: 'get',
      handlers: [
        async (req, res) => {
          const catalogId = req.params.catalogId;

          const catalog =
            await catalogRepository.queryCatalog(catalogId);
          res.status(200).json(catalog);
        }
      ]
    }
  ]);

module.exports = {
  catalog
};