import React from "react";
import "./Scrollprogress.css";
import styled from "styled-components";

// Styling 
const Scrollprogres = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  height: 2px;
  background: #000000;
  width: 0%;
`;
// Styling end

const Scrollprogress = () => {
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  return <Scrollprogres class="progress-bar" id="myBar"></Scrollprogres>;
};

export default Scrollprogress;
