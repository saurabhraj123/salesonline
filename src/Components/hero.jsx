import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate('/products/1');
  }
  return (
    <div className="hero">
      <div className="hero-image">
        <img src="https://www.pngmart.com/files/15/Beautiful-Girl-Holding-Shopping-Bag-Transparent-PNG.png" />
      </div>
      <div className="hero-text">
        <h1>SUMMER SALE</h1>
        <p>DON'T COMPROMISE ON STYLE. GET 30% off ON ALL NEW ARRIVALS</p>
        <button onClick={handleShopClick}>Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
