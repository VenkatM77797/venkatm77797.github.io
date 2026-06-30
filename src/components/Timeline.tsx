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

          {/* Software Developer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Mar 2026 – Present"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              ECHO IT SOLUTIONS Pvt Ltd
            </h4>
            <p>
              I build modern full-stack web applications with a focus on clean user interfaces, 
              scalable backend systems, and data-driven solutions. My work includes developing 
              responsive frontend experiences using React and Tailwind CSS, building backend APIs 
              with Node.js, NestJS, TypeScript, and Python, managing databases with SQL and PostgreSQL, and deploying applications using AWS.
            </p>
          </VerticalTimelineElement>

          {/* Full Stack Web Developer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Feb 2026 – Mar 2026"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Web Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              ElevanceSkills · Remote, USA
            </h4>
            <p>
              Developed full-stack web applications as part of structured, project-based internship programs.
              Built responsive frontend interfaces using React.js and Tailwind CSS with reusable UI components.
              Designed and integrated RESTful APIs using Node.js and Express for seamless client-server communication.
              Worked with MongoDB/Firebase for database design, storage, and real-time data handling.
              Implemented authentication and authorization using JWT-based security flows.
              Participated in end-to-end project development including debugging, testing, and deployment.
              Collaborated in mentor-guided sessions focused on real-world project execution and portfolio building.                        
            </p>
          </VerticalTimelineElement>

          {/* Software Engineer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Jan 2025 – Dec 2025"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Epiq · Overland Park, KS
            </h4>
            <p>
              Contributed to the development and enhancement of enterprise-level software solutions in a legal-tech environment.
              Designed and maintained backend services using Python frameworks.
              Built and consumed RESTful APIs for secure and scalable system integration across modules.
              Worked with SQL Server databases for query optimization, data modeling, and performance tuning.
              Participated in microservices-based architecture to improve scalability and system maintainability.
              Collaborated with cross-functional teams including QA, product managers, and DevOps engineers.
              Assisted in debugging production issues and implementing fixes to ensure system reliability.
              Followed Agile methodologies, participated in sprint planning, code reviews, and CI/CD workflows.
            </p>
          </VerticalTimelineElement>

          {/* IT Tutor */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Sept 2023 – Dec 2024"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Tutor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pittsburg State University · Pittsburg, KS
            </h4>
            <p>
              Delivered tutoring sessions on core computer science subjects including DSA, OOP, DBMS, and OS.
              Guided students in Python, Java, and C++ programming fundamentals and advanced concepts.
              Assisted with assignments, coding projects, and exam preparation strategies.
              Explained system design and problem-solving approaches in simplified, structured formats.
              Mentored students on practical coding skills using Git and Linux environments.
            </p>
          </VerticalTimelineElement>

          {/* SDE Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Sept 2023 – Dec 2024"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">SDE Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Groww · Bangalore, IND
            </h4>
            <p>
              Developed and enhanced user-facing web features for high-traffic fintech applications used by millions of users.
              Built responsive and high-performance UI components using React.js and Next.js, focusing on scalability and reusability.
              Collaborated with backend engineers to integrate REST APIs and ensure smooth data flow across services.
              Improved application performance by optimizing rendering, bundle size, and API response handling.
              Worked closely with designers and product teams to translate UI/UX requirements into production-ready features.
              Wrote clean, maintainable code and participated in code reviews, debugging, and agile sprint cycles.
              Contributed to improving SEO, page load speed, and overall user experience across web platforms.
            </p>
          </VerticalTimelineElement>

          {/* Frontend Developer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Jan 2020 – May 2022"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kaamkashi Multi-Resources Pvt. Ltd · Visakhapatnam, IND
            </h4>
            <p>
              Developed responsive and scalable frontend applications using React.js and Next.js.
              Implemented state management using Redux and optimized application performance.
              Converted UI/UX designs from Figma into pixel-perfect web interfaces.
              Integrated REST APIs for dynamic data rendering and user interaction flows.
              Ensured cross-browser compatibility and mobile-first responsive design.
              Collaborated in fast-paced startup environment with agile development practices.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}


export default Timeline;