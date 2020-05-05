import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut } from '../actions';


class GoogleAuth extends React.Component{
 
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
            .init({
                clientId:
                '987518347753-mgo4203gtcopoflibnhqolp58gm85nkm.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance(); //Assign the author instance to this start off well 
                this.onAuthChange(this.auth.isSignedIn.get()) //Update our state inside of our redux store and then
                this.auth.isSignedIn.listen(this.onAuthChange); // Wait for that authentication status to change at some point in the future.
            });
            
        });
        }
        //callback function authentication state on the 
        onAuthChange = isSignedIn =>{

            if(isSignedIn){
                this.props.signIn(this.auth.currentUser.get().getId());
            } else {
                this.props.signOut();
            }
        }

        onSignInClick = () => {
            this.auth.signIn();
        }

        onSignOutClick = () => {
        this.auth.signOut();
        }

        renderAuthButton(){
            if(this.props.isSignedIn === null) {
                return null ;
            } else if( this.props.isSignedIn){
                return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="goggle ico" />
                    Sign Out
                </button>
                );
            } else {
                return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="goggle ico" />
                    Sign In
                </button>
                )
            }
        }


    render(){
        return <div>{this.renderAuthButton()}</div>
    }
 
}

const mapStateToProps = state  => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
    mapStateToProps, 
    { signIn, signOut} //Action creators
    )(GoogleAuth);