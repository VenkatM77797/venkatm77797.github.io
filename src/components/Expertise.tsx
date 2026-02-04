import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "SQL",
  "MS Excel",
  "Pivot Tables",
  "Data Validation",
  "Power BI",
  "Data Visualization"
];

const labelsSecond = [
  "Python",
  "Excel Automation",
  "Data Cleaning",
  "Reporting Scripts",
  "Git",
  "Workflow Optimization"
];

const labelsThird = [
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
          {/* 1. Data Analysis & Reporting */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Data Analysis & Reporting</h3>
            <p>
              Strong foundation in analyzing and managing structured datasets using Excel, SQL, and Python.
              Experienced in applying data validation, cleaning, and transformation techniques to ensure
              accuracy and consistency, and generating insights through reports and dashboards to support
              academic and operational decision-making.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* 2. Python Automation & Scripting */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Python Automation & Workflow Optimization</h3>
            <p>
              Experienced in developing Python scripts to automate repetitive reporting and data-processing
              workflows. Built automation solutions using Python and Excel to reduce manual effort,
              improve efficiency, and maintain well-documented, reusable processes.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* 3. NLP, ML & GenAI Foundations */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>NLP, Machine Learning & GenAI Foundations</h3>
            <p>
              Hands-on experience building NLP and ML-based applications through academic and personal
              projects, including a campus Q&A chatbot and sentiment analysis systems. Worked with
              text preprocessing, TF-IDF vectorization, similarity matching, and supervised learning
              models to extract insights from structured and unstructured data.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Expertise;