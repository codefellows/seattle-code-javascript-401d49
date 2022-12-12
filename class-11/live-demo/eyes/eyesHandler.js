'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {
  setTimeout(() => {
    console.log(`Eyes: We see brightness of ${payload.brightness}, tell the brain`);
    eventPool.emit('BRIGHTNESS', payload);
  }, 1000);
};
