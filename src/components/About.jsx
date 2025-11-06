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
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQZR1hY_BAmrxSS5rr_cHwxKlUATZft0i8PFj2TSorxJMjiNE6Bh9Z_1bioIQOfzaWnsO_6tTSqQbsXv26vZyZb5bCzjaL46jjJRB_9fZt5uZ-b2uCldNGnCYNyxCuVrPmU4Ojcv_0aA/s480/vivek.jpeg"
                alt="profile"
              />
            </div>

            <div className="profile-details">
              <p className="detail-item">Name: Om Vivek</p>
              <p className="detail-item">
                Job Role: Associate Technical Support
              </p>
              <p className="detail-item">Experience: 7 Months</p>
              <p className="detail-item">Address: Hyderabad, India</p>
            </div>
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
              Full-stack developer with solid expertise in React.js, JavaScript,
              and Python. Skilled in building responsive UI, dynamic web
              applications, and backend services using Spring Boot and Python.
              Experienced through internships, certifications, and real-world
              projects, including a published research project in computer
              vision.
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
