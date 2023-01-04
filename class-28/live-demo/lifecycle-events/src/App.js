import { useEffect, useState } from 'react';
import axios from 'axios';
import Content from './Components/Content';

const App = (props) => {
  const [name, setName] = useState('World');
  const [data, setData] = useState([]);
  const [showContent, setShowContent] = useState(false);


  // greedy (a Ryanism) effect occurs EVERY time an event occurs 
  // useEffect takes a callback as an argument
  useEffect(() => {
    console.log('An event ocurred');
  });

  // trigger an even t when state is changed
  // use effect STILL takes a callback, ALSO takes an array with a list of state variables to "watch"
  useEffect(() => {
    console.log('name "state" was updated');
  }, [name]);

  // do a thing ONCE on mount (not like greedy) 
  // achieved by adding an empty array as the 2nd parameter
  useEffect(() => {
    console.log('something happened ONCE when mounted');
    async function apiCall(){
      let response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setData(response.data.results)
    }
    apiCall();
  }, []);



  return (
    <>
      <h1>Hello {name}</h1>
      <button onClick={() => setName('You')}>Change Greeting</button>
      <button onClick={() => setShowContent(!showContent)}>Show Content</button>
      {showContent && <Content />}
      <ul>
        {data.map((pokemon, index) => (
          <li key={`pokemon-${index}`}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  )
};

export default App;
