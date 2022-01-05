import React from "react";
import "./Blogcard.css";
// import styled from "styled-components";
// import { Link } from "react-router-dom";


const Blogcard = (props) => {
  return (
    <div>
      <div className="cardcontainer">
      <div className="containertitle">{props.blogtitle}
      </div>
      </div>
    </div>
  );
};

export default Blogcard;

// JS
/*  
 <CardContainer className="card-container">
          <CoverImage className="img-container" src={Coverpic} alt="" />
          <BlogTitle className="blog-title">{props.CardTitle}</BlogTitle>
        </CardContainer>
*/

/*
const CardContainer = styled.div`
  background-color: #f3f3f3;
  border-radius: 12px;
  // margin: 0px 15px 50px 15px;
  padding: 10px;
  width: 270px;
  height: 320px;
  box-shadow: 1px 1px 20px #cccccc;
`;
const CoverImage = styled.img`
  width: 250px;
  margin: auto;
  border-radius: 12px;
`;
const BlogTitle = styled.h3`
  margin: 15px 5px 5px 10px;
  color: #393E46;
  width: 220px;
  line-height: 25spx;
  font-size: 19px;
  font-family: "Montserrat", sans-serif;
  font-weight:700;
`;

*/
