import React from "react";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const dataAnalysisTools = [
  "SQL",
  "MS Excel",
  "Pivot Tables",
  "Data Validation",
  "Power BI",
  "Data Visualization",
  "Pandas",
  "Matplotlib",
  "Data Cleaning"
];

const automationTools = [
  "Python",
  "Excel Automation",
  "Data Cleaning",
  "Reporting Scripts",
  "Git",
  "Workflow Optimization"
];

const mlTools = [
  "NLP",
  "TF-IDF",
  "scikit-learn",
  "Sentiment Analysis",
  "Chatbot Development",
  "Vector Similarity"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>

        <div className="skills-grid">

          {/* Data Analysis */}
          <div className="skill">
            <h3>Data Analysis & Reporting</h3>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {dataAnalysisTools.map((tool, index) => (
                <Chip key={index} className="chip" label={tool} />
              ))}
            </div>
          </div>

          {/* Automation */}
          <div className="skill">
            <h3>Python Automation</h3>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {automationTools.map((tool, index) => (
                <Chip key={index} className="chip" label={tool} />
              ))}
            </div>
          </div>

          {/* ML / NLP */}
          <div className="skill">
            <h3>NLP & Machine Learning</h3>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {mlTools.map((tool, index) => (
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