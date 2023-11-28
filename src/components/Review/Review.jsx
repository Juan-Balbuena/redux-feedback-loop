import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector} from 'react-redux';



function Review(){

const history = useHistory();
const feedbackInfo = useSelector(store => store.feedbackInfo);



return(
    <>
    <p>Thank You!</p>
    <ul>
        {feedbackInfo.map((feedback, index) =>
        <li key={index}>
            {feedback.feeling}<br></br>
        </li>)}
    </ul>
    <button type='submit' onClick={e => history.push('/')}>Leave New Feedback.</button>
    </>
)
}

export default Review;