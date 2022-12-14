'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001');
const { generateMessage, generateReceivedMessage } = require('./handlers');

socket.emit('JOIN', 'messages');

socket.on('RECEIVED', handleReceived);

function handleReceived(payload) {
  setTimeout(() => {
    generateReceivedMessage(payload);
  }, 1000);
}

setInterval(() => {
  generateMessage(socket)();
}, 500);
