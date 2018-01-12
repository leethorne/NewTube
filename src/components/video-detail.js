import React, { Component } from 'react';

const VideoDetail = (props) => {
    if(!props.suggestion) {
        return <div>Something went wrong...</div>
    }

    const videoId = props.suggestion.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`


        return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} ></iframe>
            </div>
            <div className="details">
                <h3>{props.suggestion.snippet.title}</h3>
                <p>{props.suggestion.snippet.description}</p>
            </div>
        </div>    
        )
}

export default VideoDetail;