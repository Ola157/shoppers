import React from "react";

import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="new-letter">
      <div>
        <h2>Get Exclusive Offers On Your Email</h2>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="form">
          <input type="text" placeholder="Your Email id" />
          <button className="new-letter-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
