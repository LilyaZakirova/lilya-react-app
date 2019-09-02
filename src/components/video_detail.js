import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) {
        return (
            <div className="video-app__notification">
                Видео загружается...
            </div>
        );
    }

    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-app__player">
            <div className="video-app__video-wrapper">
                <iframe className="video-app__video" src = {videoUrl}/>
            </div>
            <div className="video-app__details">
                {/*<div className="video-app__title">{video.snippet.title}</div>*/}
                {/*<div className="video-app__description">{video.snippet.description}</div>*/}
            </div>
        </div>
    );

}

export default VideoDetail;