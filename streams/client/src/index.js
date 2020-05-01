import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'; //Import Element Provider
import { createStore, applyMiddleware, compose} from "redux";
import  reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk)) // Redux-thunk goes in applyMiddleware
); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)