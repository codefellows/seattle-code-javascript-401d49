'use strict';

require('dotenv').config();
const { db } = require('./src/models');
const server = require('./src/server.js');
const PORT = process.env.PORT;

db.sync().then(() => {
  console.log('successful connection');
  server.start(PORT);
});
