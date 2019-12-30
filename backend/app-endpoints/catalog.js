
const catalog =
  () => ([
    {
      uri: '/catalog/:catalogId',
      method: 'get',
      handlers: [
        async (req, res) => {
          const catalogId = req.params['catalogId'];
          res.status(200).json({
            catalog_id: catalogId
          });
        }
      ]
    }
  ]);

module.exports = {
  catalog
};