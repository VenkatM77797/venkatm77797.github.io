import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Dec 2024"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Master of Science in Information Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pittsburg State University · Pittsburg, KS, USA
            </h4>
            <p>
              Relevant coursework: Web Programming, Database Systems, Object-Oriented Design,
              Software Engineering, JAVA, Python, Graduate projects included building a finance dashboard
              using React and REST APIs and implementing data handling algorithms in Python.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="May 2022"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Technology in Computer Science and Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gayatri Vidya Parishad College · Visakhapatnam, IND
            </h4>
            <p>
              Relevant coursework: OOP, Computer Networks, Operating Systems,
              Software Development Life Cycle (SDLC).
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
