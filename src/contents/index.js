
export const requestCatalog =
  async (catalogId) => {
    await waitLittle(1500);
    return {
      thumbnails: [],
      pages: dummyData,
      indices: [
        {
          title: 'SevenEleven Select',
          type: 'GROUP',
          index: null
        }
      ]
    }
  };

const waitLittle = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms));

const dummyData = [
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
  'http://seveneleven2.cafe24.com/_aiibook/20191201_catalog/catImage/441/s010.jpg'
];