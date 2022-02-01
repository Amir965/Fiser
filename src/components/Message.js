import React from 'react';
import "./Message.css"
import Banner from "../assets/Banner.jpeg";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import VideoDisplay from "./VideoDisplay";
import videoImage1 from "../assets/videoImage.png";
import NowPlaying from "../assets/NowPlaying.jpg";
const Message = () => {
  const [videoSrc, setVideoSrc] = React.useState('');
  const [isDisplay, setIsDisplay] = React.useState(false);
  const [videoImage, setVideoImage] = React.useState(videoImage1);

  
  let myInlineCssNone = {
    display: "none",
  };

  let myInlineCssBlock = {
    display: "block",
  };

  const videoChanger = (videoDynamic) => {
    setVideoSrc(videoDynamic);
    setIsDisplay(true);
    setVideoImage(NowPlaying);
   
  };
  return (
    <>
      <div className="Banner-image">
        <img src={Banner} alt="" />
      </div>
      <div className="welcome">
        <h1>Welcome Dear Merchant!</h1>
        <p>5 ways to increase repeat business and beat competition.</p>
      </div>
      <div
        style={isDisplay ? myInlineCssBlock : myInlineCssNone}
        className="video-popup"
      >
        <VideoDisplay
          videoSrc={videoSrc}
          setIsDisplay={setIsDisplay}
          setVideoImage={setVideoImage}
        />
      </div>
      <div className="questions-wrapper">
        <div className="questions">
          {/* <video
            src={video}
            // width="200"
            // height="300"
            controls="controls"
            autoplay="true"
            onClick={() => videoChanger(video)}
          /> */}
          <img src={videoImage} alt="" onClick={() => videoChanger(video1)} />
          <p>1. How to get more repeat customers? (By Creating Offers)</p>
        </div>
        <div className="questions">
          <img src={videoImage} alt="" onClick={() => videoChanger(video2)} />

          <p>2. How to get more repeat customers? (By Billing on Pharma)</p>
        </div>
        <div className="questions">
          <img src={videoImage} alt="" onClick={() => videoChanger(video3)} />

          <p>3. How to increase repeat business from existing customers?</p>
        </div>
        <div className="questions">
          <img src={videoImage} alt="" onClick={() => videoChanger(video4)} />

          <p>4. All in one solution for billing, payments, GST reports</p>
        </div>
        <div className="questions">
          <img src={videoImage} alt="" onClick={() => videoChanger(video5)} />

          <p>
            5. All payments, One Solution! Collect Cash, Card, UPI at one place
          </p>
        </div>
      </div>

      <div className="layout">
        <p>Book Your Free Expert Session</p>
        <div className="layout-section">
          <button className="btn">BOOK NOW</button>
          <ul className="list-section">
            <li>Personal app training by expert.</li>
            <li>Anytime callback and learn service.</li>
            <li>
              Use pharma app and get cashback @ zero hidden charges.
              <br /> Check Cashback Scheme.
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Message;
