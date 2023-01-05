import React from 'react';
import './styles.scss';

const Results = (props) => {
  return (
    <section>
      {
        props.loading ?
          <pre>Loading...</pre> :
          <pre data-testid="results-data">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      }
    </section>
  );
}

export default Results;
