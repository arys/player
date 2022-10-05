import React from "react";

class AudioItem extends React.Component {
  render() {
    return <h3>{this.props.track.name}</h3>
  }
}

export default AudioItem