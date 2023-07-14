import React, { useContext, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComment] = useState("");


  const handleNameChange = (e) => {
    setName(e.target.value);
    // console.log(e.target.value)
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value)
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    // console.log(e.target.value)
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
    // console.log(e.target.value)
  };

  return (
    <>
      <div>
        <div className="contact-container">
          <div className="contact-form-container">
            <div className="contact-info"></div>
            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>

              <form className="con-form">
                <h3 className="title">Contact Us</h3>
                <div className="contact-input-container">
                  <input
                    type="text"
                    name="name"
                    className="con-input"
                    value={name}
                    placeholder="name"
                    onChange={handleNameChange}
                  />
                  <label className="contact-label" form="">
                    Username
                  </label>
                </div>
                <div className="contact-input-container">
                  <input type="email" name="email" className="con-input"
                    value={email}
                    placeholder="Email"
                    onChange={handleEmailChange}
                   />
                  <label className="contact-label" form="">
                    Email
                  </label>
                </div>
                <div className="contact-input-container">
                  <input type="tel" name="phone" className="con-input" 
                    value={number}
                    placeholder="Number"
                    onChange={handleNumberChange}

                  />
                  <label className="contact-label" form="">
                    Phone
                  </label>
                </div>
                <div className="contact-input-container textarea">
                  <textarea name="message" className="con-input"
                                      value={comment}
                    placeholder="Drop Your Valueable Feedback"
                    onChange={handleCommentChange}
                  ></textarea>
                  <label className="contact-label" form="">
                    Message
                  </label>
                </div>
                <button className="contact-btn">Sumbit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
