import streams from '../apis/streams';
import {SIGN_IN, SIGN_OUT} from './types';

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

export const createStream = formValues => async dispatch => { // User redux-thunk

    streams.post('/streams', formValues); // Post Request of Streams with Axios async to formValues
    

}

