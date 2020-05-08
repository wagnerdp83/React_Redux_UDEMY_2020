import React from 'react';
import LanguageContext from '../context/LanguageContext' ;


/* THIS IS AN EXAMPLE OF CONTEXT TYPE [ PROVIDER] 
// using this context in conjunction with that context type property is only used any time we are accessing a single context object inside a component.

class Button extends React.Component{
        //This is how we Hookup a context object to a class component. We say static context 
        //type and then we just print out the Context object itself that we had created inside that other file.
        
        static contextType = LanguageContext;
        // Essentially what static context typewrite here does is it adds a property to our class itself.

        render(){
            //console.log(this.context); // Will take the param from ...React.createContext('english');
            const text = this.context === 'english' ? 'Submit': 'Voorleggen';

            return(
                <button className="ui button primary">{text}</button>
                
            )
        }

}
*/

/* THIS IS AN EXEMPLE OF CONTEXT TYPE [ CONSUMER ] */
// Use of consumer any time that we want to get information out of multiple different context objects inside of a single component
class Button extends React.Component{
    
    render(){
    
        return(
            <div className="extra content">
                <button className="ui button" style={{margin: '0px 15px 15px 15px'}}>
                    <LanguageContext.Consumer>
                        {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
                    </LanguageContext.Consumer>
                </button>
            </div>
            
        )
    }

}

export default Button;