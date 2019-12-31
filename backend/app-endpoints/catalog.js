const { catalogRepository } = require('../repositories');
const { BackendError } = require('../errors');

const wrapAsync = (handler) =>
  async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (err) {
      next(err);
    }
  }
    
const catalog =
  () => ([
    {
      uri: '/catalog/:catalogId',
      method: 'get',
      handlers: [
        wrapAsync(async (req, res) => {
          const catalogId = req.params.catalogId;

          const catalog =
            await catalogRepository.queryCatalog(catalogId);

          if (catalog === null) {
            throw new BackendError('삭제된 카탈로그이거나 잘못된 접근입니다.');
          }

          res.status(200).json(catalog);
        })
      ]
    }
  ]);

module.exports = {
  catalog
};