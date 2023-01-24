import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetAxios = (apiUrl) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});

  const getNext = async (nextUrl) => {
    try {
      let res = await axios.get(nextUrl);
      setResponse(res.data);
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    const initialGet = async () => {
      try {
        let res = await axios.get(apiUrl);
        // console.log('these are the results', res)
        setResponse(res.data);
      } catch (e) {
        setError(e);
      }
    };
    initialGet();
  }, []);

  return { ...response, error, getNext };
};

export default useGetAxios;


