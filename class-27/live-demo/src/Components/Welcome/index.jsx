import { useState } from 'react';
import './styles.scss'

const Welcome = () => {

  const [name, setName] = useState('World')

  return (
    <>
      <h1 data-testid="welcome-h1">Welcome {name}</h1>
      <input data-testid="welcome-input" onChange={(e) => {setName(e.target.value)}}/>
    </>
  )
};

export default Welcome;
