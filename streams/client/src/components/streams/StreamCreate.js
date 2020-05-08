import React from 'react';
import { connect } from 'react-redux';
import {createStream } from '../../actions';
import  StreamForm  from './StreamForm';

//Reusing the same Form to Edit and Create components

class StreamCreate extends React.Component {
    
    onSubmit = formValues => {
       this.props.createStream(formValues);
    }

    // handleSubmit from redux 
    render(){
        return (
            <div>
                <h3>Create s Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
            );
    }
}

export default connect(null, {createStream})(StreamCreate);
