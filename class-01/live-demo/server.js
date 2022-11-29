'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;
const logger = require('./middleware/logger');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');

// create an instance of express => create a singleton
const app = express();


// middleware => functions that interact with the request / response objects
app.use(cors());

// use middleware on EVERYTHING
// app.use(logger);

// app.use();

app.get('/', logger, (req, res, next) => {
  res.status(200).send('Hello World!!!');
});

app.get('/bad', (req, res, next) => {
  next('We have a problem');
});

app.use('/*', notFound);
app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log('listening on port: ', PORT));
}

module.exports = { start, app };
