
const catalog =
  () => ([
    {
      uri: '/catalog/:catalogId',
      method: 'get',
      handlers: [
        async (req, res) => {
          const catalogId = req.params['catalogId'];
          setTimeout(() => {
            res.status(200).json({
              thumbnails: [],
              pages: [
                null,
                'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s001.jpg',
                'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s002.jpg',
                'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s003.jpg',
                'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s004.jpg',
                'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s005.jpg',
                'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s006.jpg',
                'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s007.jpg',
                'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s008.jpg',
                'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s009.jpg',
                'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s010.jpg',
                'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s011.jpg',
                'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s012.jpg'
              ]
            });
          }, 1500);
        }
      ]
    }
  ]);

module.exports = {
  catalog
};