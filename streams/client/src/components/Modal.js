import React from 'react';
import ReactDOM from 'react-dom';


// Create Portals [ similar to de old Modal]

const Modal = props => {
    // onClick={(e) => e.stopPropagation()} PREVENT THE CLICK IS NOT APPLIED TO CHILD TAGS
    // onClick={props.onDismiss} Works similar to createBrowserHistory.push('/') but dinamicaly
    return ReactDOM.createPortal(
        <div 
            onClick={props.onDismiss}  
            className='ui dimmer modals visible active'>

            <div 
                onClick={(e) => e.stopPropagation()} 
                className="ui standard modal visible active">

               <div className="header">{props.title}</div>
               <div className="content">{props.content}</div>
               <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );

}

export default Modal;