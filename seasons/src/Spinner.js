import React from 'react';

const Spinner = props => {

    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.messageLoading}
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    messageLoading: 'Loading...'
}

export default Spinner;