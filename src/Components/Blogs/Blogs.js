import React from "react";
import Blogcard from "../Blog card/Blogcard";
// import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

const BlogContainer = styled.div`
  padding: 400px 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Blogs = () => {
  return (
    <BlogContainer className="blog-container">
      <Blogcard />
    </BlogContainer>
  );
};

export default Blogs;
