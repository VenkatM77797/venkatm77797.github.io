import React from "react";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { GitHub } from "@mui/icons-material";


const frontendTools = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
];

const backendTools = [
  "Python",
  "Node.js",
  "NestJS",
  "REST APIs",
  "Authentication",
];

const databaseTools = [
  "PostgreSQL",
  "Prisma",
  "Database Design",
  "Git"
];

const dataTools = [
  "pandas",
  "Git",
  "GitHub",
  "Vercel",
  "Data Analysis",
  "Automation",
  "Data Cleaning"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">

        <h1>Expertise</h1>
        <p className="subtitle">What I work with and build using</p>

        <div className="skills-grid">

          <div className="skill">
            <h3>Frontend Development</h3>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {frontendTools.map((tool, index) => (
                <Chip key={index} className="chip" label={tool} />
              ))}
            </div>
          </div>

          <div className="skill">
            <h3>Backend Development</h3>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {backendTools.map((tool, index) => (
                <Chip key={index} className="chip" label={tool} />
              ))}
            </div>
          </div>

          <div className="skill">
            <h3>Database & Tools</h3>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {databaseTools.map((tool, index) => (
                <Chip key={index} className="chip" label={tool} />
              ))}
            </div>
          </div>

          <div className="skill">
            <h3>Data & Automation</h3>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {dataTools.map((tool, index) => (
                <Chip key={index} className="chip" label={tool} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;