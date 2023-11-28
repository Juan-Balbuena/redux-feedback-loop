import React from 'react';
import axios from 'axios';
import './App.css';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min.js';


function App() {

  return (
    <>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>

<Router>

<Route exact path='/'>
  <p>How are you feeling today? (Rate on a scale 1-5)</p>
  <Feelings />
</Route>

<Route exact path='/understanding'>
  <p>How well are you understanding the content? (Rate on a scale 1-5)</p>
  <Understanding />
</Route>

<Route exact path='/support'>
  <p>How well are you feeling supported? (Rate on a scale 1-5)</p>
  <Support />
</Route>

<Route exact path='/comments'>
  <p>Any comments you want to leave?</p>
  <Comments />
</Route>

<Route exact path='/review'>
  <Review />
</Route>

</Router >
</>
  );
}

export default App;
