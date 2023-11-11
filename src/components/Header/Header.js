import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeContext from "../../Context/DarkModeContext/DarkModeContext";
import CartContext from "../../Context/CartContext/CartContext.js";


const Header = () => {
  const {cartItemsCount} = useContext(CartContext);
  const { darkMode, darkModeEnable, setDarkModeEnable } =
    useContext(DarkModeContext);
  const [log, setLog] = useState(true);
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };
  const body = document.body;

  useEffect(() => {
    darkModeEnable
      ? ((body.style.backgroundColor = "#141A1F"),
        (body.style.color = "white"),
        setDarkModeEnable(true))
      : ((body.style.backgroundColor = "white"),
        (body.style.color = "black"),
        setDarkModeEnable(false));
  }, [darkModeEnable]);

  const myStyleHeader = darkModeEnable
    ? {
        backgroundColor: `${darkMode.headerBackgroundColorDark}`,
        color: `${darkMode.headerColorDark}`,
      }
    : {
        backgroundColor: `${darkMode.headerBackgroundColorLight}`,
        backdropFilter: `${darkMode.headerBackdropFilter}`,
        color: `${darkMode.headerColorLight}`,
      };

  

  const handleDarkMode = () => {
    setDarkModeEnable(!darkModeEnable);
  };
  return (
    <header
      className={`header ${isNavbarActive ? "active" : ""}`}
      style={myStyleHeader}
    >
      <span
        style={{
          cursor: "pointer",
          fontSize: "2rem",
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
      <div className="nav-section">
        <button
          className={`color-mode ${darkModeEnable ? "dark" : "light"}`}
          onClick={() => handleDarkMode()}
        >
          {!darkModeEnable ? <LightModeIcon fontSize="medium" /> : <DarkModeIcon fontSize="medium"/>}
        </button>
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
                {`Cart - ${cartItemsCount}`}
                {console.log("cartItems.length",cartItemsCount)}
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
        <div className="mobile-navbar-btn" onClick={toggleNavbar}>
          <div className="icon-wrapper-menu">
            <MenuIcon fontSize="large" className="mobile-nav-icon" />
          </div>
          <div className="icon-wrapper-close">
            <CloseIcon fontSize="large" className="mobile-nav-icon-close" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
