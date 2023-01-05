import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = (props) => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);


  const callApi = (requestParams) => {

    setRequestParams(requestParams);
  }

  useEffect(() => {
    // mock output
    // const data = {
    //   count: 2,
    //   results: [
    //     { name: 'fake thing 1', url: 'http://fakethings.com/1' },
    //     { name: 'fake thing 2', url: 'http://fakethings.com/2' },
    //   ],
    // };
    const axiosCall = async () => {
      console.log(requestParams)
      let response = await axios(requestParams)

      if (Object.keys(requestParams).length > 0) {
        setData(response.data);
        setLoading(false);
      }
    }
    axiosCall();
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams?.method?.toUpperCase()}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} setLoading={setLoading} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );

}

export default App;
