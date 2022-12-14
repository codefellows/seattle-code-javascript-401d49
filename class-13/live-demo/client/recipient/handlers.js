'use strict';

const confirmReceipt = (socket) => (payload) => {
  console.log('Message Received', payload);
  console.log('recipient payload-------', payload);
  socket.emit('RECEIVED', payload);
};

module.exports = confirmReceipt;
