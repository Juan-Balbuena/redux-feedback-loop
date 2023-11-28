import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Support( {setSupport} ) {

  const history = useHistory();
  let [supportToAdd, setSupportToAdd] = useState({ support: 0 });

  const handleSupportChange = (event) => {
    setSupportToAdd({
      ...supportToAdd,
      support: event.target.value,
    });
  }

  const addSupport = (event) => {
    event.preventDefault();
    axios.post('/api/feedback', supportToAdd).then((response) => {
      setSupport();
      setSupportToAdd({support: 0 });
    }).catch((error) => {
      console.log('Error in posting support', error);
      alert('Something went wrong!')
    });


  };

  return (
    <form onSubmit={(event) => addSupport(event)}>
      <input
        onChange={handleSupportChange}
        type='text'
        placeholder=''
      />

      <button type='submit' onClick={e => history.push('/comments')}>Next</button>
    </form>
  );
}

export default Support;