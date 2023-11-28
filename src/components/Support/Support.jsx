import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Support( {setSupport} ) {
  // You will need to keep this state in this component
  // if you're only using something in one component,
  // you do not need to move it to redux
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
  
    // TODO: Axios HTTP Request here, instead of using addNewProduct from parent
    // use productToAdd as the data
    // addNewProduct(productToAdd);

    // TODO: Clear input fields

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