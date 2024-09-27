import { useEffect, useState } from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-component">
      <div className="banner-item banner">
        <img
          src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          alt=""
        />
        <div className="banner-details">
          <p>Order Online</p>
          <span>Stay home and order to your doorstep</span>
        </div>
      </div>
      <div className="banner-item banner">
        <img
          src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          alt=""
        />
        <div className="banner-details">
          <p>Dining</p>
          <span>View the city's favourite dining venues</span>
        </div>
      </div>
      <div className="banner-item banner">
        <img
          src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
          alt=""
        />
        <div className="banner-details">
          <p>NightLife and Clubs</p>
          <span>Explore the city’s top nightlife outlets</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
