import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'; // Middleware funnction to connect thunk with redux
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';


//create the store // Insert applyMiddleware as second param
const store = createStore(reducers, applyMiddleware(thunk));
// We called Applied middleware which is a function from the redux library itself. We passed the result of that into the second argument of the create store call when we apply that middleware

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.querySelector('#root')
);