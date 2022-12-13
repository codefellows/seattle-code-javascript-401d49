'use strict';

const eventPool = require('../eventPool');
const { generateOrder, thankDriver } = require('./handlers');

eventPool.on('DELIVERED', thankDriver);

setInterval(() => {
  console.log('-----------new interval begins-----------');
  generateOrder();
}, 5000);

