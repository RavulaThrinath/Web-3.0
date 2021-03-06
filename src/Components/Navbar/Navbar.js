import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import mainLogo from "../Assets/Logo.svg"
import { Squeeze as Hamburger } from "hamburger-react";

const Navbar = () => {
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="nav" id>
      <div className="navbar" id="navbar">
        <img src={mainLogo} className="navbar-logo" alt="" />
        <div className="hamburger">
          <Hamburger toggled={click} toggle={setClick} size={25} />
        </div>
        <ul className={click ? "navbar-links active" : "navbar-links"}>
          <li>
            <NavLink className="links" to="/" onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to="/about" onClick={handleClick} activeStyle>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to="/blogs" onClick={handleClick} activeStyle>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to="/contact" onClick={handleClick} activeStyle>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
