import React from "react";
import "./AboutUs.css";
import img from "../../assets/img/about-page.jpg";
const AboutUs = () => {
  return (
    <div className="abt-title">
      <div className="abt-item-1">
        <a className="abt-hover" data-letter="About Us">
          About Us
        </a>
      </div>
      <div className="abt-item-2">
        <img className="abt-img" src={img} alt="s" />
      </div>
    </div>
  );
};

export default AboutUs;
