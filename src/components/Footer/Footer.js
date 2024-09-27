import { useState } from "react";
import "./Footer.css";
import { useContext } from "react";
import DarkModeContext from "../../Context/DarkModeContext/DarkModeContext";
const Footer = () => {
    const {darkModeEnable} = useContext(DarkModeContext);
    // className={`color-mode ${darkModeEnable ? "dark" : "light"}`}
  return (
      <div className={`footer ${darkModeEnable?'darkFooter':'lightFooter'}`}>
        
        <div className="footer-element">
          <h2>SwiGer</h2>
          <p>2023 Swiger Pvt. Ltd</p>
        </div>
        <div className="footer-element">
          <h3>Company</h3>
          <p>About</p>
          <p>Teams</p>
          <p>Swiger One</p>
          <p>Instamart</p>
          <p>Genie</p>
        </div>
        <div className="footer-element">
          <div>
            <h3>Contect Us</h3>
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>
          </div>
          <div className="legal">
            <h3>Legal</h3>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="footer-element">
          <h3>We deliver to:</h3>
          <p>Banglore</p>
          <p>Gurgaon</p>
          <p>Hyderabad</p>
          <p>Delhi</p>
          <p>Mumbai</p>
          <p>Pune</p>
        </div>
      </div>
  );
};

export default Footer; 
