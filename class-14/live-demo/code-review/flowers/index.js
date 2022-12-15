'use strict';
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');
// let socket = require('../socket-client');

const { createOrder, thankDriver } = require('./handlers');

socket.emit('JOIN', '1-206-FLOWERS');
socket.emit('GET_ALL', {id: '1-206-FLOWERS'});


const callForPickup = createOrder(socket);
const handleThanks = thankDriver(socket);

socket.on('DELIVERED', (payload) => handleThanks(payload));
// setTimeout(() => {
//   createOrder(socket)();
// }, 5000)

setInterval(() => {
  // createOrder(socket)();
  callForPickup();
},800);
