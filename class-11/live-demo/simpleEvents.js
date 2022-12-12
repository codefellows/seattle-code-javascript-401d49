'use strict';

const Event = require('events');

const eventPool = new Event();

// client list
function RyansPhone(){
  console.log('Ryan sent a message');

  // creating a  payload to be emitted
  let payload = {text: 'You\'ve Got This!'};

  // emitting an event:  takes 2 arguments: event name and payload
  eventPool.emit('SEND_MESSAGE', payload);
}

function ZoesPhone(payload) {
  setTimeout(() => {
    
    console.log('Message Received by Zoe: ', payload);
  }, 2000);
}

function EliassPhone(payload) {
  setTimeout(() => {
    console.log('Message Received by Elias: ', payload);
    
  }, 2500);

}

eventPool.on('SEND_MESSAGE', ZoesPhone);
eventPool.on('SEND_MESSAGE', EliassPhone);

setInterval(() => {
  RyansPhone();
  
}, 5000);
