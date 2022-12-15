'use strict';

// const { io } = require('socket.io-client');
// const socket = io('http://localhost:3001/caps');




const pickupInTransit = (socket) => (payload) => {
  console.log(`Driver: Driver has picked up delivery:`, payload.orderId);
  socket.emit('IN_TRANSIT', payload);
  let newPayload = {
    id: payload.driverId,
    messageId: payload.messageId,
  };
  socket.emit('RECEIVED', newPayload);
};

const deliveryHandler = (socket) => (payload) => {
  console.log('driver has delivered the package');
  socket.emit('DELIVERED', payload);
};


module.exports = { pickupInTransit, deliveryHandler };
