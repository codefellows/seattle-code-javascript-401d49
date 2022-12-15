'use strict';
// const { io } = require('socket.io-client');
// const socket = io('http://localhost:3001/caps');
const Chance = require('chance');
const chance = new Chance();

// one way to curry
// let callForPickup = createOrder(socket);
// callForPickup(payload)

// another way to curry
// createOrder(socket)(payload)

const createOrder = (socket) => (payload = null) =>{
  payload = payload ? payload :  {
    store: 'acme-widgets',
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
    vendorId: 'acme-widgets',
    messageId: chance.guid(),
    driverId: 'ourPS',
  };
  console.log('Vendor: order ready for pickup', payload);
  socket.emit('PICKUP', payload);
};

const thankDriver = (socket) => (payload) =>{
  console.log('VENDOR: thank you for delivering to ', payload.customer);
  let newPayload = {
    id: payload.vendorId,
    messageId: payload.messageId,
  };
  socket.emit('RECEIVED', newPayload);
};
module.exports = {createOrder, thankDriver};
