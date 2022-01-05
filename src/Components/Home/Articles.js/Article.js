import React from "react";
import Blogcard from "../../Blog card/Blogcard";
import { Link } from "react-router-dom";
import "./Article.css";

const Article = ({ buttonName }) => {
  const navToBlog = () => {
    window.open("../../Blogs", "_self");
  };

  return (
    <div className="main">
      <div
        className="title-main"
        style={{
          maxWidth: "910px",
          margin: "auto",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div className="article-title">Latest Blogs</div>
      </div>
      <div className="blog-list">
        <Link to="/nft" className="bloglink">
          <Blogcard blogtitle={`What \n is NFT?`} />
        </Link>
        <Link to="/Blockchain" className="bloglink">
          <Blogcard blogtitle={`How Blockchain works? `} />
        </Link>
        <Link to="/Blockchain" className="bloglink">
          <Blogcard blogtitle={`Is WEB 3.o \n all hype? `} />
        </Link>
        <Link to="/Blockchain" className="bloglink">
          <Blogcard blogtitle={`Blockchain Developer Roadmap`} />
        </Link>
        <Link to="/Blockchain" className="bloglink">
          <Blogcard blogtitle={`The potential of WEB 3.o`} />
        </Link>
        <Link to="/Blockchain" className="bloglink">
          <Blogcard blogtitle={`What is \n a Smart Contract`} />
        </Link>

        <Link to="/Blockchain" className="bloglink">
          <Blogcard blogtitle={`Build your First Dapp`} />
        </Link>
        <Link to="/Blockchain" className="bloglink">
          <Blogcard blogtitle={`Solana vs Ethereum`} />
        </Link>
      </div>

      <div class="item">
        <button className="all-btn" type="button" onClick={navToBlog}>
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default Article;

// &rarr;
// <div className="waterdrop">
// <div className="drop"></div></div>
