import React, { useState } from 'react';


// create our instance of react context
export const ModeContext = React.createContext();

const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');


  let values = {mode}

  return (
    <ModeContext.Provider value={values}>
      {children}
    </ModeContext.Provider>
  )
};

export default ModeProvider;
