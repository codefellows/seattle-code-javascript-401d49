'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const customersSchema = require('./customers.schema');
const orderSchema = require('./orders.schema');
const ModelInterface = require('./modelInterface');

// 'postgres://localhost:5432/api-app'
// 'postgres://username:password@localhost:5432/api-app' <-- if username/password
// will use ternary here to set up sqlite for testing
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

// instantiate our sequelize connection to our database
// do not seem to need the SSL business with render deployment!
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create a customer model with our schema
const CustomerModel = customersSchema(sequelizeDatabase, DataTypes);
const OrderModel = orderSchema(sequelizeDatabase, DataTypes);

// relations added between customers and orders
CustomerModel.hasMany(OrderModel);
OrderModel.belongsTo(CustomerModel);

module.exports = {
  sequelizeDatabase,
  CustomerModel,
  customerInterface: new ModelInterface(CustomerModel),
  orderInterface: new ModelInterface(OrderModel),
};
