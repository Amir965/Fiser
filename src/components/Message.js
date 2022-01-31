import React from 'react';
import "./Message.css"
import Banner from "../assets/Banner.jpeg";
import video from "../assets/video.mp4";

const Message = () => {
  return (
    <>
      <div className="Banner-image">
        <img src={Banner} alt="" />
      </div>
      <div className="welcome">
        <h1>Welcome Dear Merchant!</h1>
        <p>
          5 reasons why PHARMA App is the best solution to grow your business
          
        </p>
      </div>
      <div className="questions-wrapper">
        <div className="questions">
          <video
            src={video}
            // width="200"
            // height="300"
            controls="controls"
            autoplay="true"
          />
          <p>1. How to get more repeat customers? (By Creating Offers)</p>
        </div>
        <div className="questions">
          <video
            src={video}
            // width="200"
            // height="300"
            controls="controls"
            autoplay="true"
          />
          <p>2. How to get more repeat customers? (By Billing on Pharma)</p>
        </div>
        <div className="questions">
          <video
            src={video}
            // width="200"
            // height="300"
            controls="controls"
            autoplay="true"
          />
          <p>3. How to increase repeat business from existing customers?</p>
        </div>
        <div className="questions">
          <video
            src={video}
            // width="200"
            // height="300"
            controls="controls"
            autoplay="true"
          />
          <p>4. All in one solution for billing, payments, GST reports</p>
        </div>
        <div className="questions">
          <video
            src={video}
            // width="200"
            // height="300"
            controls="controls"
            autoplay="true"
          />
          <p>
            5. All payments, One Solution! Collect Cash, Card, UPI at one
            place
          </p>
        </div>
      </div>

      <div className="layout">
        <p>Book Your Free Expert Session</p>
        <div className='layout-section'>
          <button className='btn'>BOOK NOW</button>
        <ul className='list-section'>
          <li>Personal app training by expert.</li>
          <li>Anytime callback and learn service.</li>
          <li>
            Use pharma app and get cashback @ zero hidden charges.<br/> Check
            Cashback Scheme.
          </li>
          </ul>
          </div>
      </div>
    </>
  );
};

export default Message;
