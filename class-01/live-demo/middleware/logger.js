'use strict';

module.exports = (req, res, next) => {
  req.timestamp = new Date();
  console.log('logged at', req.timestamp);
  next();
};
