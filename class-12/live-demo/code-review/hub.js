'use strict';

const eventPool = require('./eventPool');
require('./driver');
require('./vendor');

function logger(event, payload){
  const time = new Date();
  console.log('EVENT:', {event, time, payload});
}

eventPool.on('PICKUP',(payload) => logger('PICKUP', payload));
eventPool.on('IN_TRANSIT',(payload) => logger('IN_TRANSIT', payload));
eventPool.on('DELIVERED',(payload) => logger('DELIVERED', payload));
