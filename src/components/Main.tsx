import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from "../assets/images/Venkat_New_Image.png";
import '../assets/styles/Main.scss';

function Main() {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings: [
        "Software Developer",
        "React | NodeJS | PostgreSQL",
        "Data Analysis | Automation",
        "Building Real-World Applications"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Venkat Mandarapu" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/VenkatM77797" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/venkat-mandarapu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>

          <h1>Venkat Mandarapu</h1>

          {/* REMOVE THIS */}
          {/* <p>Software Developer</p> */}

          <h2 className="typing-text">
            <span ref={el}></span>
          </h2>

          <div className="mobile_social_icons">
            <a href="https://github.com/VenkatM77797" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/venkat-mandarapu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;