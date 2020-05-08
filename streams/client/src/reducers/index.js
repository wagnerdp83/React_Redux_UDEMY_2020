import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form'; // Assign the default name 'Reducer' for a especific Reducer, in this case is formReducer
import authReducer from './authReducer';
import streamReducer from './streamReducer'


export default combineReducers({
    auth: authReducer, //Gets the authenticationm state from authReducer
    form: formReducer,
    streams: streamReducer
});