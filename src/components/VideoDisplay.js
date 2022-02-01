import React from "react";
import videoImage1 from "../assets/videoImage.png";

function VideoDisplay({ videoSrc, setIsDisplay, setVideoImage }) {
  const videoRef = React.useRef(null);

  const videoPlayPauseHandle = () => {
    setIsDisplay(false);
    videoRef.current.stop();
    setVideoImage(videoImage1);
  };
  return (
    <div>
      <button onClick={videoPlayPauseHandle}>&#10005;</button>
      <video
        src={videoSrc}
        width="200"
        controls="controls"
        ref={videoRef}
        autoplay="true"
      />
    </div>
  );
}

export default VideoDisplay;
