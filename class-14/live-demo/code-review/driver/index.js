'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');
// let socket = require('../socket-client');

const {pickupInTransit, deliveryHandler} = require('./driverHandler');
socket.emit('JOIN', 'ourPS');
socket.emit('GET_ALL', {id: 'ourPS'});

socket.on('PICKUP', driverHandler);
function driverHandler(payload){
  setTimeout(() => {
    pickupInTransit(socket)(payload);
  },1000);
  setTimeout(() => {
    deliveryHandler(socket)(payload);
  },7000);
}
