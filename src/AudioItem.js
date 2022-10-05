import React from "react";

class AudioItem extends React.Component {
  constructor(props) {
    super(props)
    this.audio = React.createRef()
  }

  togglePlay = () => {
    this.props.onTogglePlay(this.props.track)
  }

  render() {
    return (
      <div className="item">
        <i 
          className={`large middle aligned icon ${this.props.isPlaying ? 'pause' : 'play'}`}
          onClick={() => this.togglePlay()}
        />
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