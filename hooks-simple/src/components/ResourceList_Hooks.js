import React, { useState, useEffect } from 'react'; //
import axios from 'axios';


const ResourceList = ({resource}) =>{

    const [resources, setResources] = useState([]);
    
    /*
    const fetchResource = async () =>{
       const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
       setResources(response.data)// Update my State resource with the fetched data from the Json API
       
    }
    */

    // Same result using different syntax 
    useEffect(
        () => {
            (async resource => {
               const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`
            );

            setResources(response.data);
       
        })(resource);

    }, [resource]); 

    //if you want to institute any type of check to limit how often it's called just pass in some value like so
    //If you want to make sure that that arrow function only gets called one time. Put in an empty array.
    // if you want the function right there to be ran every single time your component is rendered. Just don't pass an array no problem 
    
    return(
        <ul>
            { resources.map( listOfResources => <li key={listOfResources.id}> {listOfResources.title}</li> ) } 
        </ul>
    )
    

}

export default ResourceList;