import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
// import UserContext from "../../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [log, setLog] = useState(true);
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const cartItems = useSelector(store => store.cart.items);

  // const {user} = useContext(UserContext);
  // {console.log("user",user)}

  return (
    <header className={`header ${isNavbarActive ? "active" : ""}`}>
      <span
        style={{
          cursor: "pointer",
          fontSize: "2rem",
          color: "white",
          marginTop: "4px",
          
        }}
      >
        <Link to="/">
          swi
          <span
            style={{ color: "#F99417", fontWeight: "600", fontSize: "2.5rem" }}
          >
            G
          </span>
          er
        </Link>
      </span>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link className="navbar-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/deals">
              Deals
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/cart">
              Cart - {cartItems.length}
            </Link>
          </li>

          <li>
            {log === true ? (
              <button className="log-btn" onClick={() => setLog(false)}>
                Log in
              </button>
            ) : (
              <button className="log-btn" onClick={() => setLog(true)}>
                Log out
              </button>
            )}
          </li>
        </ul>
      </nav>
      <div className="mobile-navbar-btn"
      onClick={toggleNavbar}
      >
        <div className="icon-wrapper-menu">
          <MenuIcon fontSize="large" className="mobile-nav-icon" />
        </div>
        <div className="icon-wrapper-close">
          <CloseIcon fontSize="large" className="mobile-nav-icon-close" />
        </div>
      </div>
    </header>
  );
};
export default Header;
