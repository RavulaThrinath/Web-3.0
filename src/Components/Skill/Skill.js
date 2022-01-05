import React from "react";
import "./Skill.css"
import "react-typed/dist/animatedCursor.css";
// import styled from "styled-components";

const Skill = ({ icon, circle }) => {

  return (
    <div>
      <div className="skill-container">
        <div className="skill-icon">
        <img src={icon} alt="" width="80px"/>
        </div>
      </div>
    </div>
  );
};

export default Skill;

