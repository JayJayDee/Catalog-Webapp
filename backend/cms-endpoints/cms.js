const cms =
  () => ([
    {
      uri: '/',
      method: 'get',
      handlers: [
        async (req, res) => {
          console.log(req.query.id);
          res.status(200).json({});
        }
      ]
    }
  ]);

module.exports = {
  cms
};