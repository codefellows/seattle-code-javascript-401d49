import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [title, setTitle] = useState('Some Site');
  const [email, setEmail] = useState('ryan@codefellows.com');

  const values = {
    title,
    email,
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
};

export default SettingsProvider;
