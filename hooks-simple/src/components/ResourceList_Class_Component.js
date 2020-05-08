import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component{

    state = { resource: []};

    async componentDidMount(){
       const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);

       this.setState({ resource: response.data }) // Update my State resource with the fetched data from the Json API
        
    }

    /*
        componentDidUpdate() Is alife cycle method gets called any time that our component renders either because of a
        parent component or any time that we call set States inside of this class based component.
    */
    
    async componentDidUpdate(prevProps){
        /*
            if this previous prop's resource property is not equal to this dot props resource which is the current resource that is excuse
            me the current project that our component has being rendered with.
            if these are not the same that means that we do want to go ahead and make our request.
        */

        if(prevProps.resource !== this.props.resource){
            
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({ resource: response.data }) // Update my State resource with the fetched data from the Json API
        }

    }


    render(){
        return(
            <div>{this.state.resource.length}</div>
        )
    }

}

export default ResourceList;