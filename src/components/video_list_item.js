import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.medium.url;
    console.log(video);
    return (
        <li onClick = {() => {onVideoSelect(video)}} className="video-app__item"> 
            <div className="video-app__img-container">
                <img className="video-app__preview-item" src = {imageUrl}/>
            </div>

            <div className="video-app__preview-title-container">
                <h3 className="video-app__preview-title">
                    {video.snippet.title}
                </h3>
            </div>
        </li>
    );

    
};

export default VideoListItem;
