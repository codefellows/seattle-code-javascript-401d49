'use strict';

module.exports = (payload) => {
  setTimeout(() => {
    console.log('Hand: Shield the eyes!', payload);
  }, 800);
};
