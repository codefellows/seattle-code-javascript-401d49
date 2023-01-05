import { useState } from 'react';

import './form.scss';

const Form = (props) => {
  const [jsonData, setJsonData] = useState({});
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      json: jsonData,
      url: url,
    };
    props.setLoading(true);
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="form-input" name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
          <button type="submit">GO!</button>
        </label>
        <label>
          <textarea onChange={(e) => setJsonData(e.target.value)}></textarea>
        </label>
        <label className="methods">
          <span onClick={() => setMethod('get')} id="get">GET</span>
          <span onClick={() => setMethod('post')} id="post">POST</span>
          <span onClick={() => setMethod('put')} id="put">PUT</span>
          <span onClick={() => setMethod('delete')}id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
