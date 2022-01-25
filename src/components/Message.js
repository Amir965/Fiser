import React from 'react';
import "./Message.css"
import video1 from "../assets/video1.mp4";

const Message = () => {
    return (
      <>
        <div className="heading">
          <h1>
            Grow Customers, Grow Repeat Business Pharma App by Fiserv ICICI
            Merchant Services
          </h1>
        </div>
        <div className="welcome">
          <h1>Welcome Dear Merchant!</h1>
          <h4>
            5 reasons why Pharma app is the best solution to grow your repeat
            business and beat online & local competition.
          </h4>
        </div>
        <div className="questions">
          <p>VP 1 : How to get more repeat customers?</p>
          <div className="video">
            <video
              src={video1}
              width="300"
              height="200"
              controls="controls"
              autoplay="true"
            />
          </div>
        </div>
        <div className="questions">
          <p>VP 2 : How to increase repeat business from existing customers?</p>
          <div className="video">
            <video
              src={video1}
              width="300"
              height="200"
              controls="controls"
              autoplay="true"
            />
          </div>
        </div>
        <div className="questions">
          <p>VP 3 - All in one solution for billing, payments, GST reports</p>
          <div className="video">
            <video
              src={video1}
              width="300"
              height="200"
              controls="controls"
              autoplay="true"
            />
          </div>
        </div>
        <div className="questions">
          <p>
            VP4 - All payments, One Solution! Collect Cash, Card, UPI at one
            place
          </p>
          <div className="video">
            <video
              src={video1}
              width="300"
              height="200"
              controls="controls"
              autoplay="true"
            />
          </div>
        </div>
        <div className="layout">
          <h1>Book Your Free Expert Session</h1>
          <ul>
            <li>Personal app training by expert.</li>
            <li>Anytime callback and learn service.</li>
            <li>
              Use pharma app and get cashback @ zero hidden charges. Check
              Cashback Scheme.
            </li>
          </ul>
            </div>
            <div className='Book-section'>
                <h1>Book Now</h1>
                <p>Here url</p>
            </div>
      </>
    );
};

export default Message;
