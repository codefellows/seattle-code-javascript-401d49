'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const Queue = require('./lib/queue');
const PORT = process.env.PORT;
const server = new Server(PORT);
console.log('listening on port', PORT);
// creating caps namespace
const caps = server.of('/caps');
const messageQueue = new Queue();

// connect to the namespace caps // http:localhost:3001/caps
caps.on('connection', (socket) => {
  // this SHOULD log as per instructions, currently commented out to reduce noise
  // socket.onAny((event, payload) => {
  //   const time = new Date();
  //   console.log('EVENT:', { event, time, payload });
  // });
  socket.on('JOIN', (id) => {
    socket.join(id);
    console.log('joined the room: ', id);
    // emit if it makes sense (let all room members know someone has joined perhaps?)
  });
  console.log('The socket connected to caps on namespace:', socket.id);
  // listening for the PICKUP event
  socket.on('PICKUP', (payload) => {
    // console.log('hub: vendor has delivery', payload);

    let currentQueue = messageQueue.read(payload.driverId);
    if (!currentQueue) {
      let queueKey = messageQueue.store(payload.driverId, new Queue());
      currentQueue = messageQueue.read(queueKey);
    }
    // maybe conditional logic to not restore the same thing???
    currentQueue.store(payload.messageId, payload);


    socket.broadcast.emit('PICKUP', payload);
  });
  socket.on('IN_TRANSIT', (payload) => {
    // console.log('hub: Driver is in transit with:', payload);
    // logger('IN_TRANSIT', payload);

    socket.broadcast.emit('IN_TRANSIT', payload);
  });
  socket.on('DELIVERED', (payload) => {
    // console.log('hub: driver has delivered the package');

    let currentQueue = messageQueue.read(payload.vendorId);
    if (!currentQueue) {
      let queueKey = messageQueue.store(payload.vendorId, new Queue());
      currentQueue = messageQueue.read(queueKey);
    }
    currentQueue.store(payload.messageId, payload);

    socket.to(payload.vendorId).emit('DELIVERED', payload);
  });
  socket.on('RECEIVED', (payload) => {
    // maybe console log if necessary
    let currentQueue = messageQueue.read(payload.id);
    if(!currentQueue){
      throw new Error('no vendor queue created');
    }
    currentQueue.remove(payload.messageId);
  });
  socket.on('GET_ALL', (payload) => {
    // console log if necessary
    let currentQueue = messageQueue.read(payload.id);
    if (currentQueue && currentQueue.data){
      Object.keys(currentQueue.data).forEach(message => {
        if(payload.id !== 'ourPS'){
          socket.emit('DELIVERED', currentQueue.read(message));
        } else {
          socket.emit('PICKUP', currentQueue.read(message));
        }
      });
    }
  });

});
