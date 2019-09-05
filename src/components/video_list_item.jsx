import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.medium.url;
    let videoTitle = video.snippet.title;
    if (videoTitle.length > 55) {
        videoTitle = video.snippet.title.substring(0, 54) +  "...";
    }
    return (
        <li onClick = {() => {onVideoSelect(video)}} className="video-app__list-item"> 
            <figure className="video-app__item">
                <img className="video-app__preview-item" src = {imageUrl}/>

                <figcaption className="video-app__preview-title-container">
                    <h3 className="video-app__preview-title">
                        {videoTitle}
                    </h3>
                </figcaption>
            </figure>
        </li>
    );
};

export default VideoListItem;
