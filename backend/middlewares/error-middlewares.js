const { BackendError } = require('../errors');

const appError = () =>
  (err, req, res, next) => {
    if (err instanceof BackendError) {
      res.status(400).json({
        error: err.message
      });
    }
  };

const cmsError = () =>
  (err, req, res, next) => {

  };

module.exports = {
  appError,
  cmsError
};
