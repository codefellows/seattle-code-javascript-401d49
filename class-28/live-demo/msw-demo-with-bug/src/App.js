import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(undefined);



  async function getData() {
    if (url) {
      let response = await axios.get(url);
      console.log(response.data)
      setData(response.data)
    }
  }



  return (
    <>
      <h1>Data Rocks!</h1>
      <label> API GET Request URL
        <input data-testid="input" onChange={(e) => { setUrl(e.target.value) }} />
      </label>
      <button data-testid="button" onClick={getData}>Get Data</button>

      <pre data-testid="app-data">{data ? JSON.stringify(data, undefined, 2) : null}</pre>

    </>
  )
};

export default App
