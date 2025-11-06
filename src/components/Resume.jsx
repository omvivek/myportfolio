import { Component } from "react";
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        {/* ===== HEADER / INTRO ===== */}
        <div className="resume-header">
          <h1 className="big">Resume</h1>
          <h2 className="resume-title">Resume</h2>
          <p className="resume-summary">
            A React and Python developer with hands-on experience in full-stack
            projects, technical support, and real-world problem solving. Proven
            ability in building responsive applications, implementing secure
            systems, and contributing to published research in computer vision.
          </p>
        </div>

        {/* ===== EXPERIENCE SECTION ===== */}
        <div className="experience-section">
          <h1 className="section-title">Experience</h1>
          <hr className="section-divider" />

          <div className="experience-section-for-items">
            {/* Experience 1 */}
            <div className="experience-item">
              <h3 className="experience-duration">2025 - Present</h3>
              <h2 className="experience-role">Associate Technical Support</h2>
              <h5 className="experience-company">Tech Mahindra</h5>
              <div className="experience-details">
                <p className="company-description">
                  A leading global IT services and consulting company delivering
                  technology solutions across diverse industries.
                </p>
                <ul className="experience-points">
                  <li>
                    Provided technical assistance and troubleshooting for
                    software, configuration, and system-related issues.
                  </li>
                  <li>
                    Managed and resolved support tickets efficiently while
                    maintaining a consistent monthly case workload.
                  </li>
                  <li>
                    Collaborated with internal teams to troubleshoot
                    escalations, strengthening technical and communication
                    skills.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="experience-item">
              <h3 className="experience-duration">01/2022 - 05/2022</h3>
              <h2 className="experience-role">Intern</h2>
              <h5 className="experience-company">HCL Technologies</h5>
              <div className="experience-details">
                <p className="company-description">
                  A global IT services and consulting company delivering
                  technology and engineering solutions.
                </p>
                <ul className="experience-points">
                  <li>
                    Developed a prototype for an image-based authentication
                    system using Python and OpenCV.
                  </li>
                  <li>
                    Implemented basic machine learning and image recognition
                    techniques to enhance authentication accuracy.
                  </li>
                  <li>
                    Gained hands-on experience in computer vision, security
                    concepts, and Python-based application development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ===== EDUCATION SECTION ===== */}
        <div className="education-section">
          <h1 className="section-title">Education</h1>
          <hr className="section-divider" />

          <div className="experience-section-for-items">
            {" "}
            {/* Education 1 */}
            <div className="education-item">
              <h3 className="education-duration">06/2019 - 05/2023</h3>
              <h2 className="education-degree">
                BE (Bachelor of Engineering) in Computer Science Engineering
                (CSE)
              </h2>
              <h5 className="education-institution">
                Sathyabama Institute of Science and Technology
              </h5>
              <p className="education-grade">Grade: First Class Distinction</p>
            </div>
            {/* Education 2 */}
            <div className="education-item">
              <h3 className="education-duration">04/2017 - 05/2019</h3>
              <h2 className="education-degree">Intermediate in MPC</h2>
              <h5 className="education-institution">NRI Junior College</h5>
              <p className="education-grade">Grade: First Class Distinction</p>
            </div>
            <div className="education-item">
              <h3 className="education-duration">2016 - 2017</h3>
              <h2 className="education-degree">Secondary School</h2>
              <h5 className="education-institution">Dr.K.K.R'S Gowtham</h5>
              <p className="education-grade">Grade: First Class Distinction</p>
            </div>
          </div>
        </div>

        {/* ===== DOWNLOAD BUTTON ===== */}
        <p className="downloadcv-p">
          {" "}
          <a
            href="/OmVivekKollaResume.pdf"
            className="downloadcv-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOWNLOAD CV
          </a>
        </p>
      </div>
    );
  }
}

export default Resume;
