'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const basicAuth = require('./middleware/basic');
const { Users } = require('./models');

router.post('/signup', async (req, res, next) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { next(e); }
});

router.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).send(req.user);
});

module.exports = router;
