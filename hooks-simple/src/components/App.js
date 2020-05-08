import React, { useState } from 'react'; //useState from hooks
import ResourceList from './ResourceList';
import UserList from './UserList';

// Using Function as a functional component to get started.

const App = () =>{
    /* 
        When we call you state it's going to return an array with two elements inside of it. 
        We're going to take the first element of that array and assign it to the variable.
    */

    const [resource, setResource] = useState('posts'); // Array distructuring
    // resource = this.state.resource
    // setResource = this.setState({resource: 'post})


    return(
        <div>
            <UserList />
            <div>
                <button onClick={() => setResource('posts')}>Posts </button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource}/>
        </div>
    )
   
}



/* Using Class basedc component
class App extends React.Component{

    state = { resource: 'posts'}; // Defined state Default as 'posts'

    render(){
        return(
            <div>
                <div>
                    <button onClick={() => this.setState({ resource: 'posts'})}>Posts </button>
                    <button onClick={() => this.setState({ resource: 'todos'})}>Todos</button>
                </div>
                {this.state.resource}
            </div>
        )
    }
}
*/
export default App;