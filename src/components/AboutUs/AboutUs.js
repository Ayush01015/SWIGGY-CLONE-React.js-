import React from "react";
import "./AboutUs.css";
import img from "../../assets/img/about-page.jpg";
import logo from "../../assets/img/abt-logo.png"
const AboutUs = () => {
  return (
    <div className="about">
      <div className="abt-title">
        <div className="abt-item-1">
          <a className="abt-hover" data-letter="About Us">
            About <span className="underline"><span className="primary-color">U</span>s</span>
          </a>
        </div>
        <div className="abt-item-2">
          <img className="abt-img" src={img} alt="" />
        </div>
      </div>
      <div className="timeline">
        <div className="container left-container">
        <img className="abt-logo" src={logo} alt=""/>
          <div className="text-box">
            <h2>Best New Restaurant</h2>
            <small>2015-2016</small>
            <p className="">
            SwiGer" was awarded the "Best New Restaurant" in 2016, captivating diners with its innovative fusion cuisine and elegant ambiance. Patrons praised the impeccable service and mouthwatering dishes, solidifying its reputation as a culinary hotspot in the city.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="container right-container">
        <img className="abt-logo" src={logo} alt=""/>
          <div className="text-box">
            <h2>Multiple Stores</h2>
            <small>2017-2018</small>
            <p className="">
            In 2018, "SwiGer" expanded its reach and opened a second location in a bustling downtown district. The new branch showcased the restaurant's commitment to providing exceptional dining experiences, garnering widespread attention and loyal customers.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container left-container">
        <img className="abt-logo" src={logo} alt=""/>
          <div className="text-box">
            <h2>SwiGer Getting Recognized</h2>
            <small>2018-2019</small>
            <p className="">
            Recognizing the importance of sustainability, "SwiGer" implemented eco-friendly practices in 2019, such as sourcing organic ingredients and reducing food waste. This initiative not only contributed to a greener environment but also resonated with environmentally conscious diners.
            <span className="left-container-arrow"></span>
            </p>
          </div>
        </div>
        <div className="container right-container">
        <img className="abt-logo" src={logo} alt=""/>
          <div className="text-box">
            <h2>Diners' Choice Award</h2>
            <small>2020-2021</small>
            <p className="">
            In 2021, "SwiGer" received the prestigious "Diners' Choice Award" for its outstanding culinary offerings and exceptional customer service. This recognition further elevated the restaurant's status as a go-to destination for discerning food enthusiasts.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="container left-container">
        <img className="abt-logo" src={logo} alt=""/>
          <div className="text-box">
            <h2>SwiGer App Launch</h2>
            <small>2022-2023</small>
            <p className="">
            Embracing the digital age, "SwiGer" launched a state-of-the-art mobile app in 2023, allowing customers to make reservations, explore the menu, and receive personalized recommendations. This technological advancement enhanced convenience and engagement, further enhancing the restaurant's overall experience.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
