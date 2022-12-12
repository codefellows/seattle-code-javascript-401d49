'use strict';

let eventPool = require('../eventPool');

module.exports = (payload) => {

  console.log('Brain: Brightness changed!', payload);

  if (payload.brightness > 50) {
    // 'close' is the payload!  it can be an object or a primitive aka string
    eventPool.emit('DILATION', 'close');
    eventPool.emit('SHIELD_EYES', 'use hand to shield eyes');
  } else {
    eventPool.emit('DILATION', 'open');
  }


};
