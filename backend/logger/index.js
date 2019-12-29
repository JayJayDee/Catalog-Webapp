const initLogger = () => {
  log = simpleLogger();
};

const simpleLogger = () => ({
  info: (...args) => console.info(...args),
  debug: (...args) => console.debug(...args),
  error: (...args) => console.error(...args)
});

let log = simpleLogger();

module.exports = {
  initLogger,
  log
};
