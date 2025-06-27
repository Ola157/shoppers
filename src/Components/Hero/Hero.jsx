import React from "react";
import "./Hero.css";

import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.png";
import arrow from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <h2>NEW ARRIVALS ONLY</h2>
          <div className="hero-hand-icon">
            <div>
              <p>new</p>
              <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <button className="hero-btn">
            Latest Collection <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
