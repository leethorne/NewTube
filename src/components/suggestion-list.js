import React, { Component } from 'react';
import Suggestion from './suggestion';

const SuggestionList = (props) => {
   
    const suggestionItems = props.suggestionList.map((suggestion) => {
        return (
            <Suggestion
                suggestion={suggestion}
                key={suggestion.etag}
                handleVideoSelect={props.handleVideoSelect}
            />
        )
    })

        return (
        <ul className="col-md-4 list-group">
            {suggestionItems}
        </ul>
        )
}

export default SuggestionList;