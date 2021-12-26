import React, { useState } from "react";
import Rocket from "../Assets/rocket.png"
// import { Button } from "./Styles";
import "./scrolltop.css"


const Scrolltop = () => {
 
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <img src={Rocket}
        className="scroll-btn"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
     alt= "" />
    </div>
  );
};

export default Scrolltop;
