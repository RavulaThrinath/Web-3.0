import React from "react";
import Blogcard from "../../Blog card/Blogcard";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styling Start
const Main = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const ArticleTitle = styled.div`
  & {
    position: relative;
    color: #393e46;
    font-size: 25px;
    margin: 60px 0 50px 0;
    font-family: "Cinzel Decorative", cursive;
    font-weight: 500;
    letter-spacing: 5px;
    text-transform: lowercase;
  }
  &:after {
    content: "";
    position: absolute;
    top: 35px;
    width: 300px;
    right: 8px;
    height: 1px;
    background: linear-gradient(to left, #b8b8b8a2, #f3f3f3);
  }
`;
const ArticleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  justify-content: center;
`;
const ArrowButton = styled.div`
  text-align: center;
  padding: 10px 0 60px 0;
  // margin-bottom: 40px;
`;
const Item = styled.div`
  width: 200px;
  height: 50px;
  margin: auto;
`;


const Article = ({ buttonName }) => {
  const navToBlog = () => {
    window.open("../../Blogs", "_self");
  };

  return (
    <Main className="main">
      <div className="title-main" style={{
        // maxWidth: '910px',
        display:'flex',
        justifyContent:'end',
        marginRight:'145px'

    }}>
        <ArticleTitle className="article-title">Latest Blogs</ArticleTitle>
      </div>
      <ArticleList className="blog-list">
        <Link to="/nft" style={{ textDecoration: "none" }}>
          <Blogcard CardTitle="What You Need To Know About Non-Fungible Tokens (NFTs)" />
        </Link>

        <Link to="/Blockchain" style={{ textDecoration: "none" }}>
          <Blogcard CardTitle="What You Need To Know About Non-Fungible Tokens (NFTs)" />
        </Link>
        <Blogcard CardTitle="What You Need To Know About Blockchain Technology" />
      </ArticleList>
      <ArrowButton className="arrow-btn">
        <Item class="item">
          <button className="all-btn" type="button" onClick={navToBlog}>
            {buttonName}
          </button>
        </Item>
      </ArrowButton>
    </Main>
  );
};

export default Article;

// &rarr;
// <div className="waterdrop">
// <div className="drop"></div></div>
