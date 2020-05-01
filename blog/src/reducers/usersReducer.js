
export default (state = [], action ) => {

    switch(action.type){
        case 'FETCH_USER':
            return [...state, action.payload]; //Anytime that we return some data from a reducer we always have to return a new array or a new object or a different valued string as we expect redux to realize that we made a change to the data inside of our application.
        default:
            return state;
    };
};