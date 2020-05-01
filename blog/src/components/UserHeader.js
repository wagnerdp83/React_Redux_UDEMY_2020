import React from 'react';
import { connect } from 'react-redux';
//import { fetchUser }  from '../actions'; // action component


class UserHeader extends React.Component{
    
    // User needs the param ID and we are passing here as userId
    // in the last method we dont need the didMount to fetch our users and posts
    /*
    componentDidMount(){
        this.props.fetchUser(this.props.userId);
        
    }
    */

    render(){

        /* List all the Users by the ID param
        const user = this.props.users.find( user => user.id === this.props.userId);
        */
        const {user} = this.props; // (this.props.user)

        if(!user){
            return null; 
        }

        return <div className="header">{user.name}</div>
    }
}

// Refactoring the code to bring the user refered as a new argument to userId and list only the user data that we want
const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)}
}

/*
const mapStateToProps = state => {
    return {users: state.users}
}
*/

export default connect(mapStateToProps) (UserHeader);
//export default connect(mapStateToProps, {fetchUser}) (UserHeader);