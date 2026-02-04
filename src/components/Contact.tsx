import React from "react";
import "../assets/styles/Contact.scss";

import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get In Touch</h1>

          <p className="contact-text">
            Feel free to reach out for collaborations or a friendly hello.
          </p>

          <a
            href="mailto:venkatmandarapu7@gmail.com"
            className="contact-email"
          >
            <EmailIcon style={{ marginRight: "8px" }} />
            venkatmandarapu7@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
