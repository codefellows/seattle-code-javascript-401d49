import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = React.createContext();

// const testUsers = {
//   admin: {
//     username: 'admin',
//     password: 'ADMIN',
//     email: 'admin@fakeuser.com',
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZDFiMzNjZTQ5MDAxODlmMzhiNyIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIiwiZGVsZXRlIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA3OTMxLCJleHAiOjE2NTg5MTE1MzF9.bqe-52if5K50rGn30P4fheuAa2qWuxse9tWiuH4cnUM',
//   },
//   editor: {
//     username: 'editor',
//     password: 'EDITOR',
//     email: 'editor@fakeuser.com',
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZjk5MzNjZTQ5MDAxODlmMzhiYSIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA4NTY5LCJleHAiOjE2NTg5MTIxNjl9.073ppQCHbplYN9befn8JElcP4zgFX6TEe_ARUQZc0KU',
//   },
//   user: {
//     username: 'user',
//     password: 'USER',
//     email: 'user@fakeuser.com',
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBmMGZjMzNjZTQ5MDAxODlmMzhjMCIsImNhcGFiaWxpdGllcyI6WyJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA4OTI0LCJleHAiOjE2NTg5MTI1MjR9.t7c7k2LbaTxsdfYjx_WC3QiP4MycU8sZryVyXQqJQH',
//   }
  
// }

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    // note the shorthand
    return user?.capabilities?.includes(capability)
  };

  const _validateToken = (token) => {
    try {
      let validUser = jwt_decode(token);
      // console.log('validUser', validUser);
      if(validUser){
        setUser(validUser);
        setIsLoggedIn(true);
        console.log('I am logged in');
      }
    } catch(e){
      setError(e);
      console.error(e);
    }
  };

  const login = async (username, password) => {
    // let authCredentials = testUsers[username];

    let config = {
      baseURL: 'https://api-js401.herokuapp.com',
      url:'/signin',
      method: 'post',
      auth: {username, password}
    }

    let response = await axios(config);
    console.log('response data', response.data);
    const { token } = response.data; 
    // validate we have the correct password
    if (token){
      try {
        _validateToken(token);
      } catch (e){
        setError(e);
        console.error(e);
      }
    }
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
  };

  

  const values = {
    user,
    isLoggedIn,
    error,
    can,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
