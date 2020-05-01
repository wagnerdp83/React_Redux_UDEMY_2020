import React from 'react';
import unsplash from '../api/unsplash.js';
import ImageList from './ImageList'
import SearchBar from './SearchBar';


class App extends React.Component {

    state = { 
        images: [] 
    };
 
    // Using ASYNC and await is the same of .then(), Will show my results especified by nodes eg:. data.results or anyone else
     onSearchSubmit = async term => {
        
       const response =  await unsplash.get('/search/photos/', {
            params: { query: term },
        })
        
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
                Found {this.state.images.length} images
            </div>
        );
    }

}

export default App;