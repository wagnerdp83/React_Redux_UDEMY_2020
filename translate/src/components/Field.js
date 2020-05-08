import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field  extends React.Component{

    static contextType = LanguageContext;
    // Essentially what static context typewrite here does is it adds a property to our class itself.
    
    render(){
        
        const text = this.context === 'english' ? 'Name' : 'Naam';

        return(
            <div className="ui event" style={{padding: '0 15px 15px 15px'}}>
                <div className="ui content">
                    <label>{text}:</label>
                    <input />
                </div>
           </div>
        )
    }

}

export default Field;