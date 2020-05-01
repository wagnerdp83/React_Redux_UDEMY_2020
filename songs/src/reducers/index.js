import {combineReducers} from 'redux'; //Import to Combine Reducers from Redux usind curly braces

const songsReducer = () =>{
    return [
        {title: 'No Scrubs', duration: '4:09'},
        {title: 'Macarena', duration: '2:09'},
        {title: 'All star', duration: '3:49'},
        {title: 'I want it that way', duration: '2:09'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {

    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

// export reducers
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
})