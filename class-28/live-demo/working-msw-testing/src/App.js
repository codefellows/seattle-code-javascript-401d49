import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(undefined);
  const [loading, setLoading] = useState(false);


  const getData = async () => {
    setLoading(true)
    try {
      if (url){
        let response = await axios.get(url)
        setData(response.data);
        setLoading(false)

      }
    } catch(e){
      console.log(e);
    }
  }

  return (
    <>
      <h1>Data Rocks!</h1>
      <label> API GET Request URL
        <input data-testid="input" onChange={(e) => {setUrl(e.target.value)}}/>
      </label>
      <button data-testid="button" onClick={getData}>Get Data</button>

      <section>
      {
        loading
          ?
          <div>LOADING...</div>
          :
          <pre data-testid="pre">{data ? JSON.stringify(data, undefined, 2) : null}</pre>
      }
    </section>
  
    </>
  )
};

export default App;
