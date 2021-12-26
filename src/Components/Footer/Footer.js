import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Footer.css";
import facebook from "../Assets/Facebook.svg";
import instagram from "../Assets/Instagram.svg";
import twitter from "../Assets/Twitter.svg";
import linkedin from "../Assets/LinkedIn.svg";
import github from "../Assets/GitHub.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {  Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="footer">
       <footer className="footer-bar">
      <div className="explore">
      <Link className="explore-links" to="/">Home</Link>
      <Link className="explore-links" to="/">About</Link>
      <Link className="explore-links" to="/">Blog</Link>
      <Link className="explore-links" to="/">Projects</Link>
      <Link className="explore-links" to="/">Contact</Link>
      </div>
      <div className="logos">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={linkedin} alt="" />
        <img src={github} alt="" />
      </div>
      </footer>
      <div className="cp-text">
        <p className="footer-text">
          Made  with    <FontAwesomeIcon className="h-icon" icon={faHeart} /> by Thrinath
        </p>
      </div></div>
  );
};

export default Footer;
