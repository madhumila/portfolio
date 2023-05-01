import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Resume from "./resume.pdf";
import DownloadIcon from "./download.png";
import Madhu from "./hero.jpeg";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Madhumitha</span>
          <span>
            Passionate and driven beginner frontend developer with a hunger for
            learning and a love for coding. Armed with a solid foundation in
            HTML, CSS, JavaScript and React.js and a deep desire to create
            user-friendly and visually stunning websites
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div style={{display: "flex"}}>
          <a href={Resume} download>
            <button
              className="button s-button"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                textDecoration: "None",
              }}
            >
              <h5>Resume</h5>
              <img style={{ height: "20px" }} src={DownloadIcon} alt="" />
            </button>
          </a>
          {/* <div>
            <a href="https://github.com/madhumila">
              <img style={{ height: "40px" }} src={Github} alt="" />
            </a>
          </div> */}
        </div>
        {/* social icons */}
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Madhu} alt="" />

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
