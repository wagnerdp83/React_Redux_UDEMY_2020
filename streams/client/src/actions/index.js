import streams from '../apis/streams';
import createBrowserHistory from '../history';

import {
        SIGN_IN, SIGN_OUT, 
        CREATE_STREAM,
        FETCH_STREAMS,
        FETCH_STREAM,
        DELETE_STREAM,
        EDIT_STREAM,
    } from './types';


export const signIn = userId =>{
    return {
        type: SIGN_IN,
        payload: userId
   }
};


export const signOut = () =>{
    return {
        type: SIGN_OUT
    }
};

// STREAM [ CREATE ] //////////////////////////////////////////////////////////////////////////////
export const createStream = formValues => async (dispatch, getState) => { // User redux-thunk
    const {userId} = getState().auth;
    const response = await streams.post('/streams', {...formValues, userId}); // Post Request of Streams with Axios async to formValues
    
    dispatch( { type: CREATE_STREAM, payload: response.data }); // Return only the object related to my stream create
   //that's going to essentially save the stream that we just created inside of our application level States.

   // Create a progammatic navigation to get bacl to the root route [ work on browser history navigation]
   createBrowserHistory.push('/');

}

// STREAM [ FETCH STREAMS ] //////////////////////////////////////////////////////////////////////////////
//Following the RESTful conventions diagram to fetch and dispach the objects
//Fetch list of streams
export const fetchStreams = () => async dispatch =>{
    const response = await streams.get('/streams');
    dispatch ({ type: FETCH_STREAMS,  payload: response.data });
}

// STREAM [ FETCH STREAM ] //////////////////////////////////////////////////////////////////////////////
// Get particular recordexport const fetchStreams = () => async dispatch =>{
export const fetchStream = (id) => async dispatch =>{
    const response = await streams.get(`/streams/${id}`);
    dispatch ({ type: FETCH_STREAM,  payload: response.data });
}

// STREAM [ EDIT ] //////////////////////////////////////////////////////////////////////////////
export const editStream = (id, formValue) => async dispatch => {
    console.log('Edit Stream:');
    const response = await streams.patch(`/streams/${id}`, formValue); // Using PATCH we are going to update only the values we have changed, PUT method will update my whole json only with the new values
    dispatch ({  type: EDIT_STREAM, payload: response.data });
    
    createBrowserHistory.push('/');

}

// STREAM [ DELETE ] //////////////////////////////////////////////////////////////////////////////
export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
    createBrowserHistory.push('/');
}