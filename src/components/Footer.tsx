import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/VenkatM77797" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/venkat-mandarapu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Built by <a href="https://github.com/VenkatM77797" target="_blank" rel="noreferrer">Venkat Mandarapu</a></p>
    </footer>
  );
}

export default Footer;