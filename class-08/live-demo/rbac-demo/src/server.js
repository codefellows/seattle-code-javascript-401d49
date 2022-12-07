'use strict';

// 3rd party requirements
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3002;
const authRouter = require('./auth/router');
const bearerAuth = require('./auth/middleware/bearer');
const acl = require('./auth/middleware/access-control');
const errorHandler = require('./error-handlers/500');
const { UsersModel } = require('./auth/models');


// set up CORS
app.use(cors());

// access json from request body
app.use(express.json());

// process FORM input and add to request body
app.use(express.urlencoded({ extended: true }));
app.use(authRouter);

app.get('/users', bearerAuth, async (req, res, next) => {
  console.log('from the users get route', req.user);

  let users = await UsersModel.findAll();
  let payload = {
    results: users,
  };
  res.status(200).send(payload);

});

app.get('/read', bearerAuth, acl('read'), (req, res, next) => {
  res.status(200).send('You have read permission');
});

app.get('/create', bearerAuth, acl('create'), (req, res, next) => {
  res.status(200).send('You have create permission');
});

app.get('/update', bearerAuth, acl('update'), (req, res, next) => {
  res.status(200).send('You have update permission');
});

app.get('/delete', bearerAuth, acl('delete'), (req, res, next) => {
  res.status(200).send('You have delete permission');
});

app.use(errorHandler);

module.exports = {
  app,
  start: () => app.listen(PORT, console.log('server running on port', PORT)),
};
