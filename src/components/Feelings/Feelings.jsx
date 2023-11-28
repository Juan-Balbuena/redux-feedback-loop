import React, { useState } from 'react';
// import axios from 'axios';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from 'react-redux';


function Feelings( {setFeelings} ) {
  // You will need to keep this state in this component
  // if you're only using something in one component,
  // you do not need to move it to redux
  const history = useHistory();
  const dispatch = useDispatch();

  let [feelingToAdd, setFeelingToAdd] = useState({ feeling: 0 });

  const handleFeelingsChange = (event) => {
    setFeelingToAdd({
      ...feelingToAdd,
      feeling: event.target.value,
    });
  }

//   const addFeeling = (event) => {
//     event.preventDefault();
//     axios.post('/api/feedback', feelingToAdd).then((response) => {
//       setFeelings();
//       setFeelingToAdd({feeling: 0 });
//     }).catch((error) => {
//       console.log('Error in posting a feeling', error);
//       alert('Something went wrong!')
//     });

const addFeeling = (event) => {
    console.log(`Adding feedback info:`, feelingToAdd)
    event.preventDefault();
    
    const action = { type: 'ADD_FEEDBACK_INFO', payload: feelingToAdd };
     dispatch(action);

    history.push("/review")

};
return (
    <>
    <form onSubmit={(event) => addFeeling(event)}>
      <input
        onChange={handleFeelingsChange}
        type='text'
        placeholder=''
      />

      <button type='submit' onClick={e => history.push('/understanding')}>Next</button>
    </form>
    </>
  );
  
  };


 

export default Feelings;