'use strict';

require('dotenv').config();
const { Socket } = require('engine.io');
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

// instance of a listening event server at http://localhost:3001
const server = new Server(3001);

// create a namespace
const brightness = server.of('/brightness');

brightness.on('connection', (socket) => {
  console.log('Socket connected to brightness namespace!', socket.id);

  // how ot join a room
  // socket.on('JOIN', (room) => {
  //   console.log(`You've joined the ${room} room`);
  //   socket.join(room);
  // });

  socket.on('SUNLIGHT', (payload) => {
    console.log('SUNLIGHT', payload);
  });

  
});

// connect server to clients.  aka listen to clients
server.on('connection', (socket) => {
  console.log('Socket connected to Event Server!', socket.id);

  socket.on('MESSAGE', (payload) => {
    console.log('Server MESSAGE event', payload);

    // 3 different ways I could emit
    // socket.emit('MESSAGE', payload); // sends to ALL parties in the socket
    // server.emit('MESSAGE', payload); // sends to ALL parties in the SERVER
    socket.broadcast.emit('MESSAGE', payload); // sends to all parties in the socket EXCEPT for the sender

  });
  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event', payload);
    socket.broadcast.emit('RECEIVED', payload);
  });
});
