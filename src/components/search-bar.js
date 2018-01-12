import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            term: ''
        }
    }

    onInputChange(term) {
        this.setState((prevState) => {
            return {
                term: term
            }
        })
        this.props.onSearchTermChange(term)
    }

    render() {
        return (
        <div className="search-bar"> 
                <img id="youtube-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfpEQA1aGp01J4uMRQliM2VF3iTGagCsdnhPM_Mat99bIIRkS" />

                <input placeholder=" Search" id="suggestion" value={this.state.term} onChange={ (event) => this.onInputChange(event.target.value)}/>
                
                <button><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </div>
        )
    }
}

export default SearchBar;