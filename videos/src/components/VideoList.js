import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

   const renderList =  videos.map((video) => {
        return <VideoItem  
                    onVideoSelect={onVideoSelect}
                    video={video}
                    id={video.id.videoID}
                    key={video.id.videoID}
                />;
    });

    return <div className="ui relaxed divided list">{renderList}</div>;
    

};

export default VideoList;


