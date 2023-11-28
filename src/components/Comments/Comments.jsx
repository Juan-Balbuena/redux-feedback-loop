import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Comments( {setComments} ) {

  const history = useHistory();
  let [commentToAdd, setCommentToAdd] = useState({ comment: '' });

  const handleCommentsChange = (event) => {
    setCommentToAdd({
      ...commentToAdd,
      comment: event.target.value,
    });
  }

  const addComment = (event) => {
    event.preventDefault();
    axios.post('/api/feedback', commentToAdd).then((response) => {
      setComments();
      setCommentToAdd({comment: '' });
    }).catch((error) => {
      console.log('Error in posting a comment', error);
      alert('Something went wrong!')
    });

  };

  return (
    <form onSubmit={(event) => addComment(event)}>
      <input
        onChange={handleCommentsChange}
        type='text'
        placeholder=''
      />

      <button type='submit' onClick={e => history.push('/review')}>Next</button>
    </form>
  );
}

export default Comments;