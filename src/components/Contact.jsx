import { Component } from "react";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


class Contact extends Component {
  render() {
      return (
        <div className="projects-section">
          <div className="projects-header">
            <h1 className="big">Contact</h1>
            <h2 className="projects-title">Contact</h2>
            <p className="projects-subtitle">
              Below are the details to reach out to me!
            </p>
          </div>

          <div className="projects-grid">
            <div className="contact-card">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h2 className="project-name">Address</h2>
              <p className="project-description">
                Hyderabad, Telangana, 502032
              </p>
            </div>

            <div className="contact-card">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h2 className="project-name">Contact Number</h2>
              <p className="project-description">+91 8688332442</p>
            </div>

            <div className="contact-card">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h2 className="project-name">Email Address</h2>
              <p className="project-description">omvivekk@gmail.com</p>
            </div>

            <div className="contact-card">
              <div className="icon">
                <i className="fa-solid fa-file-arrow-down"></i>
              </div>
              <h2 className="project-name">Download Resume</h2>
              <p className="project-description">
                <a
                  href="/OmVivekKollaResume.pdf"
                  className="downloadcv-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume Link
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    } 
}
export default Contact;