import React from "react";
import Blogcard from "../../Blog card/Blogcard";
import styled from "styled-components";

// Styling Start
const Main = styled.div`
  width: 100%;
  margin-top:40px;
`;

const ArticleTitle = styled.div`
  & {
    position: relative;
    font-size: 20px;
    font-family: "Cinzel Decorative", cursive;
    font-weight: 500;
    color: #000000;
    letter-spacing: 7px;
    text-transform: lowercase;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 0 60px 0;
  }
  &:after {
    content: "";
    position: absolute;
    top: 100px;
    width: 190px;
    height: .5px;
    border-radius: 10px;
    background: #00000021;
  }
`;
const ArticleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:40px;
  align-items: center;
  max-width:1000px;
  margin:auto;
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
`

const Article = ({ containerTitle, buttonName }) => {
  const navToBlog = () => {
    window.open("../../Blogs", "_self");
  };



  return (
    <Main className="main">
      <ArticleTitle className="article-title">{containerTitle}</ArticleTitle>
      <ArticleList className="blog-list">
        <Blogcard  />
        <Blogcard  />
        <Blogcard  />
        <Blogcard  />
        <Blogcard  />
        <Blogcard  />
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
