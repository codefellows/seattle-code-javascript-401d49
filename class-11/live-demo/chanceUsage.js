'use strict';

const Chance = require('chance');

const chance = new Chance();

let customer = {
  name: chance.name(),
  address: chance.address(),
  id: chance.guid(),
};

console.log(customer);
