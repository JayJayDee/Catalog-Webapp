
class BackendError extends Error {
  constructor(msg) {
    super(msg);
  }
}

module.exports = {
  BackendError
};
