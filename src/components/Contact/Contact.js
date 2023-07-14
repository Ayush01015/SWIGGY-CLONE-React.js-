import React, { useState } from "react";
import "./contact.css";

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
        <div className="contact-form-container">
          <div className="contact-info"></div>
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
