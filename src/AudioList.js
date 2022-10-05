import React from "react";
import AudioItem from "./AudioItem";

class AudioList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { playingAudio: null, sound: null }
  }

  togglePlay = (audio) => {
    if (this.state.playingAudio) {
      this.state.sound?.pause()
    }
    if (audio.id !== this.state.playingAudio.id) {
      const sound = new Audio(audio.previewURL)
      sound.play()
      this.setState({ sound: sound, playingAudio: audio })
    }
  }

  render() {
    const list = this.props.tracks.map(track => (
      <AudioItem 
        key={track.id}
        track={track}
        onTogglePlay={this.togglePlay}
        isPlaying={track.id === this.state.playingAudio?.id}
      />
    ))
    return (
      <div className="ui relaxed divided list">
        {list}
      </div>
    )
  }
}

export default AudioList;