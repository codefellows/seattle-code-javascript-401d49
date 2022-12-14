'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001');
const confirmReceipt = require('./handlers');
const sendReceived = confirmReceipt(socket);

socket.on('MESSAGE', messageHandler);
socket.emit('GET_MESSAGES', {queueId: 'messages'});

function messageHandler(payload){
  setTimeout(() => {
    sendReceived(payload);
  }, 1000);
}
