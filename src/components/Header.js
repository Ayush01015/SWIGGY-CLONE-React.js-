import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [log, setLog] = useState(true);
  return (
    <div
      className="header"    >
      <span style={{ cursor: "pointer", fontSize: "2rem",color:"white",marginTop:"4px" }}>
        <Link to="/">
        swi<span style={{ color: "#F99417",fontWeight:"600",fontSize:"2.5rem"}}>G</span>er
        </Link>
      </span>
      <ul className="nav-items">
        {/* have to add pseudo class active for 1st item* */}
        {/* {console.log(useState())} */}
        <li className="li-item" style={{ color: "#F99417" }}>
          <Link to="/">Home</Link>
        </li>
        <li className="li-item">
          <Link to="/about">About</Link>
        </li>
        <li className="li-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="li-item">
          <Link to="/deals">Deals</Link>
        </li>
        <li className="li-item">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="li-item">
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
    </div>
  );
};
export default Header;
