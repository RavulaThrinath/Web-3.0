import React from "react";
import "./Blogcard.css";
import Coverpic from "../Assets/Blogcardpic.svg";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  // margin: 0px 15px 50px 15px;
  padding: 10px;
  width: 300px;
  height: 350px;
`;
const CoverImage = styled.img`
  width: 280px;
  margin: auto;
  border-radius: 12px;
`;
const BlogTitle = styled.h3`
  margin: 10px 5px 5px 5px;
  text-transform: capitalize;
  color: #000000;
  width: 250px;
  line-height: 35px;
  font-size: 22px;
  font-family: "Outfit", sans-serif;
`;

const Blogcard = (props) => {
  return (
      <div>
        <CardContainer className="card-container">
          <CoverImage className="img-container" src={Coverpic} alt="" />
          <BlogTitle className="blog-title">{props.CardTitle}</BlogTitle>
        </CardContainer>
      </div>
  );
};

export default Blogcard;
