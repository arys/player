import React from "react";
import SearchBar from "./SearchBar";
import napster from './napster'
import AudioList from "./AudioList";

class App extends React.Component {
  state = { tracks: [] }

  onSearchSubmit = async (text) => {
    const response = await napster.get('/search', {
      params: {
        query: text,
        type: 'track'
      }
    })
    this.setState({ tracks: response.data.search.data.tracks })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <AudioList tracks={this.state.tracks} />
      </div>
    )
  }
}

export default App