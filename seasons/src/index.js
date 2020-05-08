import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './SeasonDisplay.css';
import userLocation from './userLocation';

//we've now isolated all of our business logic into a separate function "userLocation" that's much easier to understand 
const App = () =>{
    const [ lat, errorMessage] = userLocation();

    let content;
    if(errorMessage){
        content = <div>Error: {errorMessage}</div>
    } else if (lat){
        content = <SeasonDisplay lat={lat} />;
    } else {
        content = <Spinner message="Please accept location request" />;
    }

    return (
        <div className="border">
            {content}
        </div>
    )
};



ReactDOM.render(<App />, document.querySelector('#root'));