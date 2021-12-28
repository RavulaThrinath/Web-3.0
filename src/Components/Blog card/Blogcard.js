import React from "react";
import "./Blogcard.css";
import Coverpic from "../Assets/Blogcardpic.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
const PostDate = styled.h2`
  font-size: 16px;
  font-family: "Outfit", sans-serif;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: #1b1b1bb2;
  margin: 2px 5px 10px 5px;
  width: 260px;
`;
const BlogTitle = styled.h3`
  margin: 10px 5px 5px 5px;
  text-transform: capitalize;
  color: #000000;
  width: 190px;
  line-height: 25px;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
`;

const Blogcard = () => {
  return (
    <Link to="/Nft">
      <div>
        <CardContainer className="card-container">
          <CoverImage className="img-container" src={Coverpic} alt="" />
          <BlogTitle className="blog-title">NFTs</BlogTitle>
          <PostDate className="Post-date">
            An NFT is a digital asset that represents real-world objects like
            art, music, game items and videos.
          </PostDate>
        </CardContainer>
      </div>
    </Link>
  );
};

export default Blogcard;
