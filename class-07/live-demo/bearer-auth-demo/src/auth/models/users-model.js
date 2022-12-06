'use strict';

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'ThisIsMySecret';

// Create User Model
const UsersSchema = (sequelizeDatabase, DataTypes) => {
  const user = sequelizeDatabase.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.VIRTUAL,
      get(){ // a method that "gets" called on "read"
        return jwt.sign({username: this.username}, SECRET, {expiresIn: 1000 * 60 * 60 * 24 * 7 });
      },
      set(){ // a method that runs when set with '=' - optional
        return jwt.sign({username: this.username}, SECRET, {expiresIn: 1000 * 60 * 60 * 24 * 7 });
      },
    },
  });

  

  user.authenticateBearer = async (token) => {
    try {
      let payload = jwt.verify(token, SECRET);
      console.log('from authenticateBearer', payload);

      const user = await this.findOne({where: {username: payload.username}});
      if(user){
        return user;
      } 
      // else {  // with validation this could work
      //   return 'No user found';
      // }
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  return user;
};

module.exports = UsersSchema;
