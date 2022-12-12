'use strict';

let brainHandler = require('./brainHandler');

module.exports = (payload) => {
  setTimeout(() => {
    brainHandler(payload);
  
  }, 1000);
};

