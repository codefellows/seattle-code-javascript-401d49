'use strict';

const eventPool = require('./eventPool');

// require handlers
const brainHandler = require('./brain');
const eyesHandler = require('./eyes/eyesHandler');
const handHandler = require('./hand/handHandler');
const pupilsHandler = require('./pupils/pupilsHandler');

// listen to all events
eventPool.on('SUNLIGHT', eyesHandler);
eventPool.on('BRIGHTNESS', brainHandler);
eventPool.on('DILATION', pupilsHandler);
eventPool.on('SHIELD_EYES', handHandler);



setInterval(() => {
  console.log('-------new interval begins---------');
  const brightness = Math.floor(Math.random() * 100);
  // for lack of a better place to start things out, emitting sunlight here
  console.log(`the sun shines with a brightness level ${brightness}`);
  eventPool.emit('SUNLIGHT', { brightness });
  // same thing as above
  // eventPool.emit('SUNLIGHT', {brightness: brightness});
}, 5000);
