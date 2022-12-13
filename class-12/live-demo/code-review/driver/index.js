'use strict';

const eventPool = require('../eventPool');
const { pickupInTransit, deliveryHandler } = require('./handlers');

eventPool.on('PICKUP', driverHandler);

function driverHandler(payload){
  setTimeout(() => {
    pickupInTransit(payload);
  }, 1000);
  setTimeout(() => {
    deliveryHandler(payload);
  }, 2000);
}
