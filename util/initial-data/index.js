require('dotenv/config');
const { log } = require('../../backend/logger');
const { initRepositories, client } = require('../../backend/repositories');

const tag = '[util/initial-data]';

const catalogItems = () => [
  {
    TableName: 'catalogs',
    Item: {
      id: '1ae59c0ebc1',
      title: '2020 설 선물 특선집',
      texts: [
        {
          page: 1,
          text: 'asdfas'
        }
      ],
      bookmarks: [
        {
          page: 2,
          title: '고등어'
        },
        {
          page: 8,
          title: '술'
        }
      ],
      thumbnails: [
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
      ],
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
    }
  }
];

(async () => {
  log.info(`${tag} initial-data pouring started`);
  await initRepositories();

  const items = catalogItems();
  for (let c of items) {
    await client.doc().put(c).promise();
    log.info(`${tag} item poured: ${c.Item.id}`);
  }

  log.info(`${tag} initial-data pouring completed`);
})();