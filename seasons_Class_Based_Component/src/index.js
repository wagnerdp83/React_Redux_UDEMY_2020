import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './SeasonDisplay.css'

class App extends React.Component {
    // Constructor has to run first than every single method call

    /* Comment the constructor line to simplify my state Initialization using only state ={}
    constructor(props){
        //Call the constructor SUPER always in the fisrt line of your STATE Constructor
        super(props);

        //Only time to set a STATE as starter, NEVER repeat
        
        this.state = { 
            lat: null, 
            long: null, 
            errorMessage: "" };
    }
    */

    state = { 
        lat: null, 
        long: null, 
        errorMessage: ""
    };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                
                this.setState({ 
                    lat: position.coords.latitude,
                    long: position.coords.longitude 
                });
            },
            err => { this.setState({errorMessage: err.message });}
        );

    };




    // React has to define render
    renderContent() {
            //Conditions to show components
            if (this.state.errorMessage && !this.state.lat){
                return <div>Error: {this.state.errorMessage}</div>
            };
            //If i don't have error message and have lat and long
            if(!this.state.errorMessage && this.state.lat && this.state.long){
                return <SeasonDisplay 
                        lat={this.state.lat} 
                        long={this.state.long} 
                        />
            }

            return (
            <div><Spinner messageLoading='Please accept the location request...'/></div>
        );
    };
    //Do not use conditions inside the Render
    render() {
        return (
            <div className="border">
                {this.renderContent()}
            </div>
        )

    }
}


ReactDOM.render(<App />, document.querySelector('#root'));