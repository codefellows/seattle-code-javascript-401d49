'use strict';

const eventPool = require('../eventPool');
const Chance = require('chance');
const chance = new Chance();


function generateOrder(payload = null){
  payload = payload ? payload : {
    store: '1-206-flowers',
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };

  console.log('Vendor: order ready for pickup');
  eventPool.emit('PICKUP', payload);
}

function thankDriver(payload){
  console.log('Vendor: Thank you for delivering to: ', payload.customer);
}

module.exports = { generateOrder, thankDriver };
