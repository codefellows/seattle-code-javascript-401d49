'use strict';

const eventPool = require('../eventPool');

function pickupInTransit(payload){
  console.log('Driver: picked up order: ', payload.orderId);
  eventPool.emit('IN_TRANSIT', payload);
}

function deliveryHandler(payload){
  console.log('Driver: order delivered: ', payload.orderId);
  eventPool.emit('DELIVERED', payload);
}


module.exports = { pickupInTransit, deliveryHandler };
