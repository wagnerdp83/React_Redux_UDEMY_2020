import React from 'react';
import { connect } from 'react-redux'; // This connect import is used to comunicate my list song with the provider and give me back the result List of Songs
import { selectSong } from '../actions';

class SongList extends React.Component{

    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className="right floated right content">
                        <button 
                            className="ui button primary" 
                            onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }



    render(){
        
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

// Convention function to request my list from provider
const mapStateToProps = state => {
    //console.log(state);
    return {songs: state.songs}; // Return a list of array from Store Component
}


//export default SongList;
export default connect(mapStateToProps,{selectSong})(SongList); //Type of export component when using connect react-redux