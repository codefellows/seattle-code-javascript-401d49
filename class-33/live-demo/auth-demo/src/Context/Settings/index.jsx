import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [title, setTitle] = useState('Some Site');
  const [email, setEmail] = useState('ryan@codefellows.com');
  const [staff, setStaff] = useState([{name: 'Ryan', position: 'Instructor'}]);

  const addStaff = (person) => {
    console.log('person: ', person);
    if(person && person.name && person.position){
      setStaff([...staff, person]);
    } else {
      console.log('Invalid person!  Add a name and position');
    }
  }

  const values = {
    title,
    email,
    setEmail,
    staff,
    addStaff
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
};

export default SettingsProvider;
