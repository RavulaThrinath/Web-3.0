import React from "react";
import "./About.css";
import Skill from "../Skill/Skill";
import Aboutimage from "../Assets/Aboutt.svg";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import Footer from "../Footer/Footer";

const About = ({ circle, icon }) => {
  return (
    <div>
      <div className="about-container">
      <div>
      <img src={Aboutimage} className="about-image" alt="" />
    </div>
        <div className="about-left">
          <div className="name">
            Hi, My Name is
            <span className="span-name"> Thrinath,</span> <br /> I'm a
            <span className="span-name"> Web
              {" "}
              <Typed
                strings={["Developer", "Designer"]}
                typeSpeed={100}
                backSpeed={80}
                loop
              />
            </span>
          </div>
          <div className="about-content">
            <p>
              I Pursued B.E in Computer Science as a main stream in sathyabama
              University. Looking to start the career as an entry-level Web
              Developer. Passionate about implementing and launching new
              projects.
            </p>
          </div>
        </div>
      </div>
      <div className="Skill-container">
        <h1 className="skill-title">Technical Skills</h1>
        <div className="Skillset">
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
            esse. Molestias dolor rerum placeat magni commodi tenetur quasi aut
            cumque!
          </div>
          <div className="skill-section">
            <Skill
              icon={<FaHtml5 className="icons" />}
              circle={
                <CircularProgressbar
                  value='90%'
                  text={`${90}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                  })}
                />
              }
            />
            <Skill icon={<FaCss3Alt className="icons" />} />
            <Skill icon={<FaJs className="icons" />} />
            <Skill icon={<FaReact className="icons" />} />
            <Skill icon={<FaGitAlt className="icons" />} />
            <Skill icon={<FaFigma className="icons" />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// @import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);
//  font-family: 'Lato', sans-serif;

/* 
.waterdrop {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-content: center;
}
.drop {
    position: relative;
    height: 200px;
    width: 200px;
    background: #202122;
    border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
    opacity: .8;
    border: 2px solid #b9b9b9;
}

.drop:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #404142;
    border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
    box-shadow: -20px 30px 16px #515357, -40px 60px 32px #515357, inset -6px 6px 10px #515357, inset 2px 6px 10px #515357, inset 20px -20px 22px #ffffff, inset 40px -40px 44px #8b8d8f;
}

.drop::after {
    content: "";
    position: absolute;
    height: 40px;
    width: 40px;
    background: #e6fdfb;
    border-radius: 44% 56% 46% 54% / 36% 50% 50% 64%;
    left: 130px;
    top: 40px;
    box-shadow: 16px 40px 0 -10px #ffffff;
    opacity: .8;
} */

/*  <Skill
            className="skill-box"
            icon={<FaHtml5 className="icons" />}
            circle={
              <CircularProgressbar
                value={90}
                background
                backgroundPadding={0}
                text={`${90}%`}
                styles={buildStyles({
                  textColor: "#cecece",
                  pathColor: "#e34c26",
                  trailColor: "#e34c2625",
                  fontFamily: "Sans-Serif",
                  backgroundColor: "#e34c2610",
                  boxShadow: "2px",
                })}
              />
            }
          />
          <Skill
            icon={<FaCss3Alt className="icons" />}
            circle={
              <CircularProgressbar
                value={60}
                background
                backgroundPadding={0}
                text={`${60}%`}
                styles={buildStyles({
                  textColor: "#ffffff",
                  pathColor: "#264de4",
                  trailColor: "#264de425",
                  fontFamily: "Outfit",
                  backgroundColor: "#264de410",
                })}
              />
            }
          />
          <Skill
            icon={<FaJs className="icons" />}
            circle={
              <CircularProgressbar
                value={70}
                background
                backgroundPadding={0}
                text={`${70}%`}
                styles={buildStyles({
                  textColor: "#ffffff",
                  pathColor: "#f0db4f",
                  trailColor: "#f0db4f25",
                  fontFamily: "Outfit",
                  backgroundColor: "#f0db4f10",
                })}
              />
            }
          />
          <Skill
            icon={<FaReact className="icons" />}
            circle={
              <CircularProgressbar
                value={60}
                background
                backgroundPadding={0}
                text={`${60}%`}
                styles={buildStyles({
                  textColor: "#ffffff",
                  pathColor: "#61dbfb",
                  trailColor: "#61dbfb25",
                  fontFamily: "Outfit",
                  backgroundColor: "#61dbfb10",
                })}
              />
            }
          />

          <Skill
            icon={<FaGitAlt className="icons" />}
            circle={
              <CircularProgressbar
                value={90}
                background
                backgroundPadding={0}
                text={`${90}%`}
                styles={buildStyles({
                  textColor: "#ffffff",
                  pathColor: "#171515",
                  trailColor: "#17151525",
                  fontFamily: "Outfit",
                  backgroundColor: "#17151510",
                })}
              />
            }
          />
          <Skill
            icon={<FaFigma className="icons" />}
            circle={
              <CircularProgressbar
                value={80}
                background
                backgroundPadding={0}
                text={`${80}%`}
                styles={buildStyles({
                  textColor: "#ffffff",
                  pathColor: "#ff4f4f",
                  trailColor: "#ff4f4f25",
                  fontFamily: "Outfit",
                  backgroundColor: "#ff4f4f10",
                })}
              />
            }
          />  */
