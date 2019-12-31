const { Router } = require('express'); 
const { cms } = require('./cms');
const { log } = require('../logger');

const tag = '[cms-endpoints]';

const initCmsEndpoints =
  () => {
    const router = new Router();
    const endpoints = [
      ...cms()
    ];

    endpoints.forEach((e) => {
      log.info(`${tag} ${e.method} ${e.uri} registered.`);
      router[e.method].apply(router, [ e.uri, e.handlers ]);
    });

    return router;
  };

module.exports = {
  initCmsEndpoints
};