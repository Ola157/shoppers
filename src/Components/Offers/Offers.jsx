import React from "react";

import exclusive_image from "../Assets/exclusive_image.png";
import "./Offers.css";
const Offers = () => {
  return (
    <div className="offers">
      <div>
        <div className="offers-left">
          <h2>Exclusive</h2>
          <h2>Offers For You</h2>

          <p>Only on best sellers products</p>
          <button className="offers-btn">Check Now</button>
        </div>
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
