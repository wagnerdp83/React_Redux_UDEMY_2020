import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    
    await dispatch(fetchPosts());
    
    /* using Loadsh to fetch my data and uniq users id and posts
    const userIds = _.uniq(_.map(getState().posts, 'userId')) // Use getState to fetch my data and get the unique users id in the posts
    userIds.forEach(id => dispatch(fetchUser(id))); // Assign a for each for my list of unique users
    */

    // chain is a very special function inside of load ash that allows us to chain on essentially a bunch of additional functions that are going to manipulate some collection of data.
    _.chain(getState().posts) //this list of posts right here will be provided at the first argument to the map function.
        .map('userId')
        .uniq() //The results of the mapping step will be automatically passed as the first argument into unique.
        .forEach(id => dispatch(fetchUser(id))) 
        .value() //It's not going to actually execute all these steps on a chained function like so until we put on a VALUE() step
};

//Action creators in modern ES06 Syntax to fetch Posts in my app
export const fetchPosts = () => async dispatch => {
       const response = await jsonPlaceholder.get('/posts');

        dispatch({type: 'FETCH_POSTS', payload: response.data}
    )
};

//Refactoring the code to dont use _memoize function
export const fetchUser = id => async dispatch =>  {
    const response = await jsonPlaceholder(`/users/${id}`);
    dispatch({type: 'FETCH_USER',  payload: response.data});

};

// Startin using _.memorize JS to fetch our data using only one request for each userId
//Function keywords 
// If i want to re fech the user i will have to create a diferent memoize because this is particulary assosiate to iD User fetch and single used to my application
// export const fetchUser = id => dispatch =>  _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder(`/users/${id}`);
//     dispatch({type: 'FETCH_USER',  payload: response.data});

// });
        

//Users needs a param ID to fetch with the Post required
// export const fetchUser = id => async dispatch =>{
//     const response = await jsonPlaceholder(`/users/${id}`);

//     dispatch({type: 'FETCH_USER',  payload: response.data})
// }




/* ES2015 syntax
export const fetchPosts = () => {
    // ASYNC goes in the RETURN
    return async function(dispatch, getState){
                        // AWAIT goes in the place Holer, json GET
        const response = await jsonPlaceHolder.get('/post');
        
        //actions
        dispatch({type: 'FETCH_POST', payload: response })
    };
}
*/



