'use strict';

let { start, sequelizeDatabase } = require('./src/server');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successfully Connected');
    start();
  })
  .catch((e) => console.error(e));
