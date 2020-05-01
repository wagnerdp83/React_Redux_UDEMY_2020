// Reducers only to read or act with some data, NEVER used to print out the value.
// The data processed MUST to be sent to a State
// Never mutate the object or array inside the state argument, always create new arrays or objects
// Reducer can never return Undefined if(state != undefined)

export default (state = [], action) =>{
    
    //most comon way to work with reducers
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
    

    /* Best syntax in my opinion to use Reducers
    if(action.type === 'FETCH_POST'){
        return action.payload

    }
    return state;
    */
};

// If the same value of State is passed in the reducer, your application will not be updated.
// STATE will always receive its first ever argument as UNDEFINED.