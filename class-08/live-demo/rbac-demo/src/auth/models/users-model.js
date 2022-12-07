'use strict';

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'ThisIsMySecret';

// Create User Model
const UsersSchema = (sequelizeDatabase, DataTypes) => {
  const user = sequelizeDatabase.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('user', 'writer', 'editor', 'admin'),
      defaultValue: 'user',  // if wrong value entered, or forget to include
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
    capabilities: {
      type: DataTypes.VIRTUAL,
      get(){
        const acl = {
          user: ['read'],
          writer: ['read', 'create'],
          editor: ['read', 'create', 'update'],
          admin: ['read', 'create', 'update', 'delete'],
        };
        return acl[this.role];
      },
    },
  });

  

  user.authenticateBearer = async function (token) {
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
