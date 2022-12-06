'use strict';

const { UsersModel } = require('../models');
const base64 = require('base-64');
const bcrypt = require('bcrypt');

async function basicAuth(req, res, next) {
  let { authorization } = req.headers;
  console.log('authorization::::', authorization); // Basic UnlhbjpwYXNz

  if (!authorization) {
    res.status(401).send('Not Authorized!');
  } else {
    // console.log('I am here');
    let authString = authorization.split(' ')[1];
    console.log('authStr:', authString);  // UnlhbjpwYXNz aka encoded Ryan:pass

    let decodedAuthString = base64.decode(authString);
    console.log('decodedAuthString:', decodedAuthString);  // Ryan:pass

    // extracting username and password from auth string 
    let [username, password] = decodedAuthString.split(':');
    console.log('username:', username);
    console.log('password:', password);

    // find user in database
    let user = await UsersModel.findOne({ where: { username } });
    // console.log('user from database', user);
    if (user) {
      let validUser = await bcrypt.compare(password, user.password);
      console.log('validUser', validUser);
      if (validUser) {
        req.user = user;
        next();

      } else {
        next('Not Authorized!');
      }
    }


  }
}

module.exports = basicAuth;
