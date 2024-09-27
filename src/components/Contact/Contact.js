import React, { useState } from "react";
import "./contact.css";
import Phone from "../../assets/img/1.png"
import Location from "../../assets/img/2.png"
import Email from "../../assets/img/3.png"
import Background from "../../assets/img/4.png"
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComment] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [numberFocused, setNumberFocused] = useState(false);
  const [commentFocused, setCommentFocused] = useState(false);

  /** to make input take text */
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  /** animation code */
  const handleNameFocus = () => {
    setNameFocused(true);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
  };

  const handleNumberFocus = () => {
    setNumberFocused(true);
  };

  const handleCommentFocus = () => {
    setCommentFocused(true);
  };

  const handleNameBlur = () => {
    setNameFocused(name !== "");
  };

  const handleEmailBlur = () => {
    setEmailFocused(email !== "");
  };

  const handleNumberBlur = () => {
    setNumberFocused(number !== "");
  };

  const handleCommentBlur = () => {
    setCommentFocused(comment !== "");
  };

  return (
    <div>
      <div className="contact-container">
      <span className="big-circle"></span>
      <img src={Background} className="square" alt="" />
        <div className="contact-form-container">
          <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
          Connect with us and let's explore together! Fill out the form below to get in touch. We look forward to hearing from you!
          </p>
          <div className="info">
            <div className="information">
              <img src={Location} className="icon" alt="" />
              <p>13th Street Alpha II Greater Noida, Uttar Pradesh</p>
            </div>
            <div className="information">
              <img src={Email} className="icon" alt="" />
              <p>ayushshrivastav575@gmail.com</p>
            </div>
            <div className="information">
              <img src={Phone} className="icon" alt="" />
              <p>7895821944</p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/ayush575/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          </div>
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form className="con-form">
              <h3 className="title">Contact Us</h3>
              <div
                className={`contact-input-container ${
                  nameFocused ? "focus" : ""
                }`}
              >
                <input
                  type="text"
                  name="name"
                  className="con-input"
                  value={name}
                  onChange={handleNameChange}
                  onFocus={handleNameFocus}
                  onBlur={handleNameBlur}
                />
                <label className="contact-label" htmlFor="name">
                  Username
                </label>
                <span>Username</span>
              </div>
              <div
                className={`contact-input-container ${
                  emailFocused ? "focus" : ""
                }`}
              >
                <input
                  type="email"
                  name="email"
                  className="con-input"
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={handleEmailFocus}
                  onBlur={handleEmailBlur}
                />
                <label className="contact-label" htmlFor="email">
                  Email
                </label>
                <span>Email</span>
              </div>
              <div
                className={`contact-input-container ${
                  numberFocused ? "focus" : ""
                }`}
              >
                <input
                  type="tel"
                  name="phone"
                  className="con-input"
                  value={number}
                  onChange={handleNumberChange}
                  onFocus={handleNumberFocus}
                  onBlur={handleNumberBlur}
                />
                <label className="contact-label" htmlFor="phone">
                  Phone
                </label>
                <span>Number</span>
              </div>
              <div
                className={`contact-input-container ${
                  commentFocused ? "focus" : ""
                }`}
              >
                <textarea
                  name="message"
                  className="con-input"
                  value={comment}
                  onChange={handleCommentChange}
                  onFocus={handleCommentFocus}
                  onBlur={handleCommentBlur}
                ></textarea>
                <label className="contact-label" htmlFor="message">
                  Message
                </label>
                <span>Message</span>
              </div>
              <button className="contact-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
