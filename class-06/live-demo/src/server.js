'use strict';

// 3rd party requirements
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3002;

// dynamic database url for testing vs development
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

// instantiating database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// set up CORS
app.use(cors());

// access json from request body
app.use(express.json());

// process FORM input and add to request body
app.use(express.urlencoded({extended: true}));

// Create User Model
const UsersModel = sequelizeDatabase.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// sequelize allows to interact with the userModel BEFORE adding data to the database using the beforeCreate hook
UsersModel.beforeCreate((user) => {
  console.log('our user', user);
});

async function basicAuth(req, res, next){
  let { authorization } = req.headers;
  console.log('authorization::::', authorization); // Basic UnlhbjpwYXNz

  if(!authorization){
    res.status(401).send('Not Authorized!');
  } else {
    // console.log('I am here');
    let authString = authorization.split(' ')[1];
    console.log('authStr:', authString);  // UnlhbjpwYXNz aka encoded Ryan:pass

    let decodedAuthString = base64.decode(authString);
    console.log('decodedAuthString:', decodedAuthString);  // Ryan:pass

    // extracting username and password from auth string 
    let [username, password] = decodedAuthString.split(':');
    console.log('username:', username);
    console.log('password:', password);

    // find user in database
    let user = await UsersModel.findOne({where: {username}});
    // console.log('user from database', user);

    if(user){
      let validUser = await bcrypt.compare(password, user.password);
      console.log('validUser', validUser);
      if(validUser){
        req.user = user;
        next();

      } else {
        next ('Not Authorized!');
      }
    }

  }

}

app.post('/signup', async (req, res, next) => {
  try  {
    let { username, password } = req.body;
    let encryptedPassword = await bcrypt.hash(password, 5);

    let user = await UsersModel.create({
      username,
      password: encryptedPassword,
    });
    res.status(200).send(user);
  } catch (e){
    next('signup error occurred');
  }
});

app.post('/signin', basicAuth, (req, res, next) => {
  // let response = {...req.user, message: 'user sign in successful'};
  res.status(200).send(req.user);
});

module.exports = {
  app,
  start: () => app.listen(PORT, console.log('server running on port', PORT)),
  sequelizeDatabase,
};
