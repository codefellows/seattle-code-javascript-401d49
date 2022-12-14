'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const Queue = require('./lib/queue');
const messageQueue = new Queue();

// instance of a listening event server at http://localhost:3001
const server = new Server(PORT);

// create a namespace
const brightness = server.of('/brightness');

brightness.on('connection', (socket) => {
  socket.onAny((event, payload) => console.log({event, payload}));
  console.log('Socket connected to brightness namespace!', socket.id);

  // how ot join a room
  socket.on('JOIN', (room) => {
    console.log('These are the rooms', socket.rooms);
    console.log('payload-----', room);
    socket.join(room);
    console.log(`You've joined the ${room} room`);
    console.log('These are the rooms', socket.rooms);
  });

  socket.on('SUNLIGHT', (payload) => {
    console.log('SUNLIGHT', payload);
  });

  
});

// connect server to clients.  aka listen to clients
server.on('connection', (socket) => {
  socket.onAny((event, payload) => console.log({event, payload}));

  // join a room
  socket.on('JOIN', (queueId) => {
    socket.join(queueId);
    console.log('joined the room: ', queueId);
    socket.emit('JOIN', queueId);
  });

  console.log('Socket connected to Event Server!', socket.id);

  socket.on('MESSAGE', (payload) => {
    console.log('Server MESSAGE event', payload);

    // manage queue
    // messageQueue is the single queue for the entire system
    // current queue will be the specific for our room (in lab: flowers, or widgets)
    let currentQueue = messageQueue.read(payload.queueId);
    if(!currentQueue){
      let queueKey = messageQueue.store(payload.queueId, new Queue());
      currentQueue = messageQueue.read(queueKey);
    }

    // store the incoming message in the proper queue
    currentQueue.store(payload.messageId, payload);

    // how messageQueue now looks (assuming flowers and widgets are included):
    /** message queue =
     * {
     *  data: {
     *    'messages': {
     *      data: {
     *        'some-message0id': payload
     *      },
     *    '1-206-flowers':{data: {}},
     *    'acme widgets': {data: {}}
     *    }
     *  }
     * }
     */

    socket.broadcast.emit('MESSAGE', payload); 
  });
  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event', payload);

    // manage queue:  remove messages once sent
    // set timeout ONLY for demo
    setTimeout(() => {
      let currentQueue = messageQueue.read(payload.queueId);
      if(!currentQueue){
        throw new Error('we have messages but no queue!');
      }
      let message = currentQueue.remove(payload.messageId);
  
      socket.to(payload.queueId).emit('RECEIVED', message);
    }, 5000);
  });

  socket.on('GET_MESSAGES', (payload) => {
    console.log('messages were gotten');
    let currentQueue = messageQueue.read(payload.queueId);
    if (currentQueue && currentQueue.data){
      Object.keys(currentQueue.data).forEach(messageId => {
        // this might be useful in your lab!
        // socket.to(messageId.queueId).emit('RECEiVED');
        socket.emit('MESSAGE', currentQueue.read(messageId));
      });
    }

  });
});
