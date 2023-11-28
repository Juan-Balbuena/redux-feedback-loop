import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Understanding( {setUnderstanding} ) {

  const history = useHistory();
  let [understandingToAdd, setUnderstandingToAdd] = useState({ understanding: 0 });

  const handleUnderstandingChange = (event) => {
    setUnderstandingToAdd({
      ...understandingToAdd,
      understanding: event.target.value,
    });
  }

  const addUnderstanding = (event) => {
    event.preventDefault();
    axios.post('/api/feedback', understandingToAdd).then((response) => {
      setUnderstanding();
      setUnderstandingToAdd({understanding: 0 });
    }).catch((error) => {
      console.log('Error in posting a understanding', error);
      alert('Something went wrong!')
    });

  };

  return (
    <form onSubmit={(event) => addUnderstanding(event)}>
      <input
        onChange={handleUnderstandingChange}
        type='text'
        placeholder=''
      />

      <button type='submit' onClick={e => history.push('/support')}>Next</button>
    </form>
  );
}

export default Understanding;