import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>
          {/* IT Tutor */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Sept 2023 – May 2024"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Tutor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pittsburg State University · Pittsburg, KS
            </h4>
            <p>
              Analyzed and maintained structured datasets using Excel and Python to track student
              performance and attendance. Automated reporting workflows, performed data validation,
              collaborated with faculty and IT teams, and created technical documentation to support
              academic reporting and process improvement.
            </p>
          </VerticalTimelineElement>

          {/* Teaching Assistant */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2019 – May 2021"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gayatri Vidya Parishad College · Visakhapatnam, India
            </h4>
            <p>
              Supported academic reporting and record management using Excel-based systems.
              Validated datasets, analyzed student performance trends, assisted with programming
              labs, and collaborated with faculty to improve academic outcomes.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}


export default Timeline;