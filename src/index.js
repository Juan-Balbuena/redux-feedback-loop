import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';


const feedbackInfo = (state = [], action) => {

    if (action.type === 'ADD_FEEDBACK_INFO') {
        return [...state, action.payload];
    }

    return state;
};

const reduxStore = createStore(
    combineReducers({
        feedbackInfo,
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>    
    </React.StrictMode>
);

export default reduxStore;