import React from "react";
import "../Home/Articles.js/Article.css"
import Blogcard from "../Blog card/Blogcard";
import styled from "styled-components";
import {Link} from "react-router-dom"

const BlogContainer = styled.div`
  padding: 400px 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Blogs = () => {
  return (
    <BlogContainer className="blog-container">
    <div className="blog-list">
    <Link to="/nft" className="bloglink">
      <Blogcard blogtitle={`What \n is nft?`} />
    </Link>
    <Link to="/Blockchain" className="bloglink">
      <Blogcard blogtitle={`Is web 3.o \n all hype? `} />
    </Link>
    <Link to="/Blockchain" className="bloglink">
      <Blogcard blogtitle={`Is web 3.o \n all hype? `} />
    </Link>
    <Link to="/Blockchain" className="bloglink">
      <Blogcard blogtitle={`What \n is nft?`} />
    </Link>
    <Link to="/Blockchain" className="bloglink">
      <Blogcard blogtitle={`Is web 3.o \n all hype? `} />
    </Link>
    <Link to="/Blockchain" className="bloglink">
      <Blogcard blogtitle={`Is web 3.o \n all hype? `} />
    </Link>
    <Link to="/Blockchain" className="bloglink">
      <Blogcard blogtitle={`Is web 3.o \n all hype? `} />
    </Link>
    <Link to="/Blockchain" className="bloglink">
      <Blogcard blogtitle={`Is web 3.o \n all hype? `} />
    </Link>
  </div>
    </BlogContainer>
  );
};

export default Blogs;
