import React from 'react';
import UserCreate from './UserCreate'
import LanguageContext from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component{
    // Set your state
    state = { language: 'english'};

    onLanguageChange = language => {
        this.setState({ language });
    }

    render(){
        return( 
            <div className="ui card"> 
                <LanguageSelector onLanguageChange={this.onLanguageChange}/>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        )
    }
    // User create will always come with the DEFAULT value, i this case is English
    // The Language.Provider wrap will make it interate with my onClick changes and give me the value updated

}

export default App;