import React, { useState } from "react";
import Article from "./Articles.js/Article";
import "./Home.css";
import CoverImage from "../Assets/Cover.svg";
import Web from "./Evolution/Web";
// import styled from "styled-components";

const Home = ({ background }) => {
  const [arrow, setArrow] = useState(true);
  const arrowVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {
      setArrow(false);
    } else if (scrolled <= 500) {
      setArrow(true);
    }
  };
  window.addEventListener("scroll", arrowVisible);
  
  const communityClick = () => {
    window.open('https://discord.com/invite/D9zSEMnU')
  }

  return (
    <div>
      <div className="home">
        <div className="CoverText">
         <h1 className="title">Everything <br /> about<span className="title-span"> WEB 3.0</span></h1>
         <button className="css-button-rounded--black" onClick={communityClick}>Join Community</button>
        </div>
        <div className="CoverImage">
          <img src={CoverImage} alt="" />
        </div>
      </div>
      <div className="box" style={{ display: arrow ? "inline" : "none" }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Web />

      <Article containerTitle="latest Blogs" buttonName="Checkout all Blogs" />
    </div>
  );
};

export default Home;
