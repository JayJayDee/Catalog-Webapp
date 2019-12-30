const { Router } = require('express'); 
const { catalog } = require('./catalog');
const { log } = require('../logger');

const tag = '[app-endpoints]';

const initAppEndpoints =
  () => {
    const router = new Router();
    const endpoints = [
      ...catalog()
    ];

    endpoints.forEach((e) => {
      log.info(`${tag} ${e.method} ${e.uri} registered.`);
      router[e.method].apply(router, [ e.uri, e.handlers ]);
    });

    return router;
  };

module.exports = {
  initAppEndpoints
};