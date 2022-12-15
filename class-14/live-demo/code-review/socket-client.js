'use strict';

//useful for testing only!
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

module.exports = socket;
