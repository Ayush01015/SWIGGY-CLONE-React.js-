import React from "react";
import "./AboutUs.css";
import img from "../../assets/img/about-page.jpg";
import logo from "../../assets/img/abt-logo.png"
const AboutUs = () => {
  return (
    <>
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
      <div className="timeline">
        <div className="container left-container">
        <img className="abt-logo" src={logo} alt=""/>
          <div className="text-box">
            <h2>SwiGer Inauguration</h2>
            <small>2018-2019</small>
            <p className="">
            Indulge in our new restaurant's tantalizing flavors, fresh ingredients, and exceptional service for an unforgettable dining experience.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container right-container">
        <img className="abt-logo" src={logo} alt=""/>
          <div className="text-box">
            <h2>SwiGer Inauguration</h2>
            <small>2018-2019</small>
            <p className="">
            Indulge in our new restaurant's tantalizing flavors, fresh ingredients, and exceptional service for an unforgettable dining experience.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container left-container">
        <img className="abt-logo" src={logo} alt=""/>
          <div className="text-box">
            <h2>SwiGer Inauguration</h2>
            <small>2018-2019</small>
            <p className="">
            Indulge in our new restaurant's tantalizing flavors, fresh ingredients, and exceptional service for an unforgettable dining experience.
            <span className="left-container-arrow"></span>
            </p>
          </div>
        </div>
        <div className="container right-container">
        <img className="abt-logo" src={logo} alt=""/>
          <div className="text-box">
            <h2>SwiGer Inauguration</h2>
            <small>2018-2019</small>
            <p className="">
            Indulge in our new restaurant's tantalizing flavors, fresh ingredients, and exceptional service for an unforgettable dining experience.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container left-container">
        <img className="abt-logo" src={logo} alt=""/>
          <div className="text-box">
            <h2>SwiGer Inauguration</h2>
            <small>2018-2019</small>
            <p className="">
            Indulge in our new restaurant's tantalizing flavors, fresh ingredients, and exceptional service for an unforgettable dining experience.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
