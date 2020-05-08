import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError = ({ error, touched}) =>{

        if (error && touched){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }

    }

    renderInput = ({input, label, meta }) => {
        
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`; // If both meta and touched values are true will show the error, otherwise empty string

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/> {/* that stuff that's going to take all those key value pairs and add them as properties to the input element. */}
                {this.renderError(meta)} {/* Show the message error via function renderError  */}
            </div>
        )
        
        /* Old Syntax to assign redux-form to my input 
        return (
            <div>
                <input onChange={formProps.input.onChange}
                value={formProps.input.value}
                />
            </div>
        )
        */
    }
    
    onSubmit = formValues => {
       this.props.onSubmit(formValues);
    }
    // handleSubmit from redux 
    render(){
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field 
                        name="title" 
                        component={this.renderInput} 
                        label="Enter Title"/> 
                    <Field 
                        name="description" 
                        component={this.renderInput} 
                        label="Enter Description" />
                    <button className="ui button primary">Submit</button>
                </form>
                
            </div>
            );
    }
}

const validate = formValues => {

    const errors = {}; // Instance of object that we want

    if(!formValues.title){ // Define conditions for what we want
        errors.title = "You must enter a title"
    }
    
    if(!formValues.description){
        errors.description = "You must enter a description"
    }

    return errors; // return te result of what we want 
}

// How can we wire up both connect and redux form at the same time.
export default reduxForm({ // Call the function reduxForm
    form: 'streamForm',  //Pass the object
            validate  
})(StreamForm);


/*
export default reduxForm({ // Call the function reduxForm
    form: 'streamCreate',  //Pass the object
            validate  
})(StreamCreate);
*/