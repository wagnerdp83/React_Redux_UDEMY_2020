import _ from 'lodash';

import {
    FETCH_STREAMS,
    FETCH_STREAM,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';


//Using 2015 syntax to fetch our values in a new object instead return or mix with array
// So in all three cases we are getting back a SINGLE record from our API. 
// We want to take that record and add it into our state object.
// So it ends up being identical for fetching a SINGLE stream creating a stream and editing a stream as well

export default ( state = {}, action) => {
    switch (action.type){
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case  FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload }; 
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload }; 
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload }; 
        case DELETE_STREAM:
            return _.omit(state, action.payload);
            
            default:
                return state;
    }
}

// _.mapKeys will return a new object with the id related instead a new array and add to our state object, map keys returns a big object and we want to take all the key value pairs from that object and add them into the new object that gets created.