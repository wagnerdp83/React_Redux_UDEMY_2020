import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = props => {
    // Avoid the Return when you can return the array direclty
   const images =  props.images.map(image => {

        return <ImageCard key={image.id} image={image} />;

    });
    
    return <div className="image-list">{images}</div>; 
}

export default ImageList;