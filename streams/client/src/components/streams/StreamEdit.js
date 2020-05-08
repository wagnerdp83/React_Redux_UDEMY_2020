import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream} from '../../actions';
import  StreamForm  from './StreamForm';

//Use Class to start fetch their ownn data as single component

class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues =>{
        //Call the ACTION creator
        console.log(this.props.match.params.id, formValues);
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render(){

        if(!this.props.stream){
            return <div>Loading..</div>
        }
        // Take the props from stream "Title and Description" and insert in initialValue param from Redux-form
        // Load the values using normal syntax [ initialValues={{ title: this.props.stream.title}} ]

        return(
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                initialValues={_.pick(
                    this.props.stream, 
                    'title', 'description'
                )}
                onSubmit={this.onSubmit} />
                
            </div>
        )
    }

    
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]};

}


export default connect(
    mapStateToProps,
    {fetchStream, editStream})
    (StreamEdit);

/*
const StreamEdit = props => {
    return <div>Stream Edit</div>;
}

const mapStateToProps = (state, ownProps) => { // mapStateToProps can call params of our state and ownProps which is a reference to the prop's object that shows up inside our stream edit component.
   
    return { stream: state.streams[ownProps.match.params.id] } ;
}

export default connect(mapStateToProps)(StreamEdit);
*/