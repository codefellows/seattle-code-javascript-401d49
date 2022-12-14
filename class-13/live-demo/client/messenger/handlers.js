'use strict';

const Chance = require('chance');
const chance = new Chance();


const generateMessage = (socket) => () => {
  let payload = {
    text: `Hi ${chance.first()}`,
    queueId: 'messages',
    messageId: chance.guid(),
  };
  console.log('Sending Message:', payload.text);
  socket.emit('MESSAGE', payload);
};

const generateReceivedMessage = (payload) => {
  console.log(payload);
  let text = payload.text.split(' ').pop();
  console.log(`Receipt confirmed for: ${text}`);
};

module.exports = { generateMessage, generateReceivedMessage };
