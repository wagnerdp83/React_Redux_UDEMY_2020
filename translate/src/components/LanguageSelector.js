import React from 'react';

class LanguageSelector extends React.Component{
    render(){
        return(
            <div className="content">
                <b>Select a language: </b>
                <i className="flag us"  onClick={() => this.props.onLanguageChange('english')}/>
                <i className="flag nl"  onClick={() => this.props.onLanguageChange('dutch')} />
            </div>
        )
    }
}

export default LanguageSelector;