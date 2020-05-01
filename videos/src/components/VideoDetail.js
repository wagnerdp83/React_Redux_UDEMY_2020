import React from 'react';
import VideoList from './VideoList';


const VideoDetail = ({ video }) => {
        if(!video){
            return <div>Loading ..</div>
        }

        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
                <div className="ui segment">
                    <div className="ui embed">
                        <iframe with="" height="" src={videoSrc} title={video.snippet.title} key={video.id.videoID}/>
                    </div>
                    <h4 className="ui header">{video.snippet.title}</h4>
                    
                    <p>{video.snippet.description}</p>
                </div>
            
            );

}

export default VideoDetail;