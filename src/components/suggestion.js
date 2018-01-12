import React, { Component } from 'react';


const Suggestion = ({ suggestion, handleVideoSelect}) => {
    
    const imageUrl = suggestion.snippet.thumbnails.default.url;

        return (
            <li className="list-group-item" onClick={() => handleVideoSelect(suggestion)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl} />
                    </div>

                    <div className="media-body">
                        <div className="media-heading">
                            <h4>{suggestion.snippet.title}</h4>
                        </div>
                    </div>
                </div>
            </li>
        )
}

export default Suggestion;