require('dotenv/config');

const { initRepositories } = require('./repositories');

(async () => {
  await initRepositories();
})();