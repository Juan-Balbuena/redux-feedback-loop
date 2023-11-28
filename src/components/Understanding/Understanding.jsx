import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Understanding( {setUnderstanding} ) {
  // You will need to keep this state in this component
  // if you're only using something in one component,
  // you do not need to move it to redux
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
  
    // TODO: Axios HTTP Request here, instead of using addNewProduct from parent
    // use productToAdd as the data
    // addNewProduct(productToAdd);

    // TODO: Clear input fields

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