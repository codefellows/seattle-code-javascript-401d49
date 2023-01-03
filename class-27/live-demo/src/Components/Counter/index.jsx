import { useState } from 'react';

import './styles.scss';

const Counter = () => {
  const [clicks, setClicks] = useState(0);
  const [factorOfFive, setFactorOfFive] = useState(false);

  const updateCounter = () => {
    let newCount = clicks +1; // cannot do clicks++
    setClicks(newCount);
    // change boolean if a factor of five
    setFactorOfFive(newCount % 5 === 0);
  }

  return(
    <>
      <h2 data-testid="counter-clicks">Button has been clicked {clicks} time(s)</h2>
      <h2 data-testid="counter-factor">Factor of five? {factorOfFive.toString()}</h2>
      <button data-testid="counter-button" onClick={updateCounter}>Update Clicks</button>

    </>
  )

};

export default Counter;
