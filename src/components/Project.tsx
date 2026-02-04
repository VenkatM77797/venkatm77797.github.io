import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Featured Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/VenkatM77797/resume-screening-level6" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/VenkatM77797/resume-screening-level6" target="_blank" rel="noreferrer"><h2>Realistic Resume Screening ATS</h2></a>
                <p>Built a Python-based Resume Screening System that automatically analyzes PDF resumes using PyPDF2 for text extraction and rule-based skill matching, estimates candidate experience, assigns weighted scores, and ranks applicants to classify them as ELIGIBLE, REVIEW, or REJECT, helping streamline recruiter shortlisting.</p>
            </div>
            <div className="project">
                <a href="https://github.com/VenkatM77797/resume-screening-level4" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/VenkatM77797/resume-screening-level4" target="_blank" rel="noreferrer"><h2>Simple ATS</h2></a>
                <p>Designed, developed Python-based Applicant Tracking System (ATS) that automates resume screening by parsing PDF resumes using PyPDF2, matching must-have and nice-to-have skills, estimating candidate experience, assigning weighted scores, and ranking applicants to support recruiter shortlisting.</p>
            </div>
            <div className="project">
                <a href="https://github.com/VenkatM77797/student-performance-analytics" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/VenkatM77797/student-performance-analytics" target="_blank" rel="noreferrer"><h2>Student Performance Analytics</h2></a>
                <p>Developed a Python and pandas–based data validation and analysis solution to ensure data quality and generate insights from student performance datasets.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;