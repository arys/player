import React from "react";
import AudioItem from "./AudioItem";

function AudioList({ tracks }) {
  const list = tracks.map(track => (
    <AudioItem key={track.id} track={track} />
  ))
  return (
    <div className="ui relaxed divided list">
      {list}
    </div>
  )
}

export default AudioList;