import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../src/Components/About/About";
import Blogs from "../src/Components/Blogs/Blogs";
import Contact from "../src/Components/Contact/Contact";
import Scrolltop from "./Components/ScrollTop/Scrolltop";
import Nft from "./Components/ArticlesPage/NFT/Nft";
import Blockchainmap from "./Components/ArticlesPage/BlockchainMap/Blockchainmap";
import Footer from "../src/Components/Footer/Footer"


function App() {
  return (
    <div className="app" >
    <Router>
    <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/blogs" element={<Blogs />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/Nft" element={<Nft mainTitle={`What You Need To Know About \n Non-Fungible Tokens (NFTs)`}  />}></Route>
          <Route exact path="/Blockchain" element={<Blockchainmap mainTitle={`How to become a blockchain developer`}  />}></Route>
        </Routes>
        <Scrolltop />
        <Footer />
        </Router>
    </div>
  );
}

export default App;
