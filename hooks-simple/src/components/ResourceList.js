import React from 'react';
import  useResources from './useResources';

/* 
    This function useResource is easy to reuse in the future when we need the RESOURCE param
*/

/* 
const useResources = (resource) => {

    const [resources, setResources] = useState([]);
    
    useEffect(
        () => {
            (async resource => {
               const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`
            );

            setResources(response.data);
       
        })(resource);

    }, [resource]); 

    return resources;

}
*/

const ResourceList = ({resource}) => {

    const resources = useResources(resource);

    return (
        <ul>
            {resources.map( listOfResources => (
                <li key={listOfResources.id}> 
                    {listOfResources.title}
                </li> 
        ))} 
        </ul>
    );
};

export default ResourceList;