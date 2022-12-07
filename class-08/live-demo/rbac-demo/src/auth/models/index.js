'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const UsersSchema = require('./users-model');

// dynamic database url for testing vs development
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

// instantiating database
const sequelizeDatabase = new Sequelize(DATABASE_URL);


const UsersModel = UsersSchema(sequelizeDatabase, DataTypes);

module.exports = { sequelizeDatabase, UsersModel };
