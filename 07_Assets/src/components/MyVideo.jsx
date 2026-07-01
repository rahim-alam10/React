import React from "react";
import ReactPlayer from "react-player";

export default function MyVideo() {
  const vidUrl = "https://www.youtube.com/watch?v=T8TZQ6k4SLE" 
  return (
    <div>
      <h1 className="text-center text-white text-2xl my-6">Video</h1>
      <ReactPlayer
        src={vidUrl}
        playing={false}
        volume={0.5}
        controls
      />
    </div>
  )
}
