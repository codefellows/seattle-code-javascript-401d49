import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {

  const [showComplete, setShowComplete] = useState(false);
  const [pageItems, setPageItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  const saveLocally = () => {
    localStorage.setItem('todo', JSON.stringify({pageItems, sort, showComplete}))
  };

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('todo'));
    if(storage){
      console.log('storage', storage);
      setShowComplete(storage.showComplete);
      setPageItems(storage.pageItems);
      setSort(storage.sort);
    }
  }, []);

  const values = {
    showComplete, 
    pageItems, 
    sort,
    setPageItems,
    setShowComplete,
    setSort,
    saveLocally,
  }

  return(
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
};

export default SettingsProvider;
