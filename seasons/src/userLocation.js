import {useState,useEffect} from 'react';

export default () =>{
//The First PARAM is the value of that state property. 
    //The second PARAM is a function that we can use to change that value.
    const [ lat, setLat] = useState(null);
    //const [long, setLong] = useState(null);

    const [errorMessage, setErrorMessage] = useState (''); //By default we are passing no message

    useEffect( () => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
                 err => setErrorMessage(err.message)
        );
    }, []); // Empty array means as we dont need to run this function several time, only once. thats's why is empty. 

    return [lat, errorMessage]
};