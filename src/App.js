import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../src/Components/About/About";
import Blogs from "../src/Components/Blogs/Blogs";
import Contact from "../src/Components/Contact/Contact";
import Scrolltop from "./Components/ScrollTop/Scrolltop";
import Footer from "./Components/Footer/Footer";
import Nft from "./Components/ArticlesPage/Nft"

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
          <Route exact path="/Nft" element={<Nft />}></Route>
        </Routes>
        <Scrolltop />
        </Router>
    </div>
  );
}

export default App;
