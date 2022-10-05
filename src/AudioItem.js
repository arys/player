import React from "react";

class AudioItem extends React.Component {
  render() {
    return (
      <div className="item">
        <i className="large middle aligned icon play" />
        <div className="content">
          <div className="header">{this.props.track.name}</div>
          <div className="meta">
            {this.props.track.artistName}
          </div>
          <div className="description">
            {this.props.track.albumName}
          </div>
        </div>
      </div>
    )
  }
}

export default AudioItem