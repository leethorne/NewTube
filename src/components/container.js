import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import VideoDetail from './video-detail';
import SearchBar from './search-bar';
import SuggestionList from './suggestion-list';

const API_Key = 'AIzaSyA4YOnb_nJ9I22CEstGv3s9cw1w517RSTA'

class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            suggestionList: [],
            currentVideo: null
        }

        this.videoSearch("Bon Iver")

        this.handleVideoSelect = this.handleVideoSelect.bind(this);
    }

    videoSearch(term){
        YTSearch({key: API_Key, term: term}, (response) =>  {
            this.setState({
                suggestionList: response,
                currentVideo: response[0]
            })
        }) 
    }

    handleVideoSelect(suggestion) {
        this.setState((prevState) => {
            return {
                currentVideo: suggestion
            }
        })
    }

    render() {
        return (
        <div className="container">

            <SearchBar 
            onSearchTermChange = {term => this.videoSearch(term)} />

            <VideoDetail 
            suggestion={this.state.currentVideo} />

            <SuggestionList 
            suggestionList ={this.state.suggestionList}
            handleVideoSelect={currentVideo => this.setState({ currentVideo})}/>
        </div>
        )
    }
}

export default Container;