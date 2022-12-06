'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const basicAuth = require('./middleware/basic');
const {UsersModel} = require('./models');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
  try  {
    let { username, password } = req.body;
    let encryptedPassword = await bcrypt.hash(password, 5);
    console.log('----------', username, encryptedPassword);
    let user = await UsersModel.create({
      username,
      password: encryptedPassword,
    });
    res.status(200).send(user);
  } catch (e){
    next(e);
  }
});

router.post('/signin', basicAuth, (req, res, next) => {
  // let response = {...req.user, message: 'user sign in successful'};
  res.status(200).send(req.user);
});

module.exports = router;
