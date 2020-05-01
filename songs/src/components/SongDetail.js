import React from 'react';
import { connect } from 'react-redux';


const SongDetail = ({ mySelectedSong }) => {
    //console.log(mySelectedSong);
    if (!mySelectedSong){
        return <div>Select a Song</div>
    }
    // Use the condition If in case the first value is null and will result in error message
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: <strong>{mySelectedSong.title}</strong>
                <br/>
                Duration: {mySelectedSong.duration}
            </p>
        </div>
        )
}
///////////////////////////////////////////////////////////
const mapStateToProps = state => {
    
    return { mySelectedSong: state.selectedSong} // I prefer use different name "mySelectedSong instead song" for my object selected song as experiment of learning
}
// mapStateToProps {Same for the component SongList but using the selectedSong as object return}

export default connect(mapStateToProps)(SongDetail);