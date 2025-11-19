import { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-left-section">
          <div className="profile-section">
            <div className="profile-img-wrapper">
              <img
                className="profile-img rounded img-fluid b-shadow-a"
                src="../omvivek.jpg"
                alt="profile"
              />
              {/* https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQZR1hY_BAmrxSS5rr_cHwxKlUATZft0i8PFj2TSorxJMjiNE6Bh9Z_1bioIQOfzaWnsO_6tTSqQbsXv26vZyZb5bCzjaL46jjJRB_9fZt5uZ-b2uCldNGnCYNyxCuVrPmU4Ojcv_0aA/s480/vivek.jpeg */}
            </div>

            <div className="profile-details">
              <p className="detail-item">Name: Om Vivek</p>
              <p className="detail-item">
                Job Role: Associate Technical Support
              </p>
              <p className="detail-item">Experience: 6 Months</p>
              <p className="detail-item">Address: Hyderabad, India</p>
            </div>
            <br />
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Skills</h3>
            <ul className="skills-list">
              <li className="skill">
                HTML
                <br />
                <span className="stars four"></span>
              </li>
              <li className="skill">
                CSS
                <br />
                <span className="stars four"></span>
              </li>
              <li className="skill">
                Python
                <br />
                <span className="stars four"></span>
              </li>
              <li className="skill">
                JavaScript
                <br />
                <span className="stars three"></span>
              </li>

              <li className="skill">
                ReactJS
                <br />
                <span className="stars three"></span>
              </li>

              <li className="skill">
                SQL
                <br />
                <span className="stars three"></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-right-section">
          <div className="about-description">
            <h1 className="big">About Me</h1>
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              I’m a Computer Science Engineer from Sathyabama Institute of
              Science and Technology (Batch of 2023). After graduation, I
              completed an Industry Ready Certification in Full Stack
              Development from NxtWave (July 2023 – April 2024), gaining
              real-world experience in HTML , CSS, React and Python. I’m currently
              working as an Associate – Technical Support at Tech Mahindra
              (since May 2025), where I strengthen my problem-solving and
              debugging skills. My goal is to move into a full-time Software
              Development / Full Stack Developer role, contributing to modern,
              user-centric web application
            </p>
          </div>

          <div className="additional-info">
            <div className="info-row">
              <h5 className="info-label">Profile:</h5>
              <p className="info-value">Full-stack developer</p>
            </div>

            <div className="info-row">
              <h5 className="info-label">Education:</h5>
              <p className="info-value">Bachelor of Engineering</p>
            </div>

            <div className="info-row">
              <h5 className="info-label">Language:</h5>
              <p className="info-value">Telugu, English, Hindi</p>
            </div>

            <div className="info-row">
              <h5 className="info-label">Interest:</h5>
              <p className="info-value">Nature walks and mindfulness</p>
            </div>

            <a
              href="https://www.linkedin.com/in/kollaomvivek/"
              className="linkedin-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKED IN
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
