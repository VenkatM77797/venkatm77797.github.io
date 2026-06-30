import React from "react";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const frontendTools = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
];

const backendTools = [
  "Python",
  "Node.js",
  "NestJS",
  "Express.js",
  "FastAPI",
  "REST APIs",
];

const databaseTools = [
  "PostgreSQL",
  "SQL",
  "Prisma ORM",
  "SQLite",
  "ChromaDB",
  "Database Design",
];

const dataTools = [
  "pandas",
  "Streamlit",
  "RAG",
  "Ollama",
  "Llama 3",
  "Sentence Transformers",
  "Data Analysis",
  "Automation",
  "Data Cleaning",
];

const developerTools = [
  "Git",
  "GitHub",
  "Docker",
  "Docker Compose",
  "Vercel",
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
              {frontendTools.map((tool) => (
                <Chip key={tool} className="chip" label={tool} />
              ))}
            </div>
          </div>

          <div className="skill">
            <h3>Backend Development</h3>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {backendTools.map((tool) => (
                <Chip key={tool} className="chip" label={tool} />
              ))}
            </div>
          </div>

          <div className="skill">
            <h3>Database & Tools</h3>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {databaseTools.map((tool) => (
                <Chip key={tool} className="chip" label={tool} />
              ))}
            </div>
          </div>

          <div className="skill">
            <h3>Data & Automation</h3>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {dataTools.map((tool) => (
                <Chip key={tool} className="chip" label={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;