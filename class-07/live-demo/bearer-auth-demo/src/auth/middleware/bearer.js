'use strict';

const { UsersModel } = require('../models');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    next('Not Authorized, No token present!');
  } else {
    try {
      let authType = req.headers.authorization.split(' ')[0];
      console.log('-------', authType);
      if (authType === 'Bearer'){
        let token = req.headers.authorization.split(' ').pop();
        console.log('from bearer middleware', token);
  
        let validUser = UsersModel.authenticateBearer(token);
        if(validUser){
          req.user = validUser;
          next();
        }
      } else {
        next('send bearer auth string');
      }
    } catch(e) {
      console.error(e);
      next(e);
    }
  }
};
