'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users-model');

const DATABASE_URL = 'sqlite::memory';
const sequelize = new Sequelize(DATABASE_URL);

// followed this pattern in last week's demo
const Users = userSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  Users,
};
