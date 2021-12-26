import React from "react";
import "./Web.css";
import Web01 from "../../Assets/Web1.svg";
import Web02 from "../../Assets/Web2.svg";
import Web03 from "../../Assets/Web3.svg";
// import styled from "styled-components";

const Web = () => {
  const Web1 = `Web 1.0 is only offering access to limited information with little to no user interaction.`;
  const Web2 = `Web 2.0 is about revolutionizing the way of creating, editing, sharing user generated content.`;
  const Web3 = `Web 3.0 is the internet owned by the builders and users, orchestrated with tokens.`;
  return (
    <div className="Web-main">
      <div className="title-parent">
        <div class="web-title">The Evolution of WEB</div>
      </div>
      <div className="main-parent">
        <div className="parent1">
          <p> </p>
          <div className="parent-content">
            <img className="image1" src={Web01} alt="" />
            <div className="rel1">
              <h2 className="Context">Read</h2>
            </div>
            <span className="parent-text">{Web1}</span>
          </div>
        </div>
        <div className="parent2">
          <pp> </pp>
          <div className="parent-content">
            <img className="image2" src={Web02} alt="" />
            <div className="rel2">
              <h2 className="Context">Read-Write</h2>
            </div>
            <span className="parent-text">{Web2}</span>
          </div>
        </div>
        <div className="parent3">
          <ppp> </ppp>
          <div className="parent-content">
            <img className="image3" src={Web03} alt="" />
            <div className="rel3">
              <h2 className="Context">Read-Write-Own</h2>
            </div>
            <span className="parent-text">{Web3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;

// <span className="parent-text">
//           Users are the data, corporations own the platform, and the code is
//           closed
//         </span>

// <span className="parent-text">
//           Users own their data, contibutors own the platform, and the code is
//           open
//         </span>
