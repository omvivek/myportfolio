import React, { Component } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";  
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="body-div">
        <Navbar />
        <div id="home" className="section">
          <div className="home-div">
            <div className="img-div">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh69tNQtHQcfofMa6txWfMoskFMj04WKNP7rvgqp2DMhReoI-XmcK2x1cnobftcQS5RZdnv1TcgPSsnASJqW8lpOEmzgH6_F_FrQnO398KnEmorNvC5m1bOrE3EM_ABblnZaha4sbJVBhME-Q5DjX0DLYN_ux6BKTRnwMe5nfCM3McuFx1SaX25089P/s663/vivek-removebg-preview.png"
                alt="profile"
              />
            </div>
            <div className="text">
              <p id="typing-animation">HELLO !</p>
              <h1>
                <span>I'm </span> Om Vivek
              </h1>
              <p className="text-para">
                Aspiring Full Stack Developer passionate about building
                efficient, scalable, and interactive web applications. Skilled
                in React, JavaScript, and Python — currently working at Tech
                Mahindra in a technical role and seeking full-time developer
                opportunities.
              </p>
              <div className="text-button">
                <a
                  href="/OmVivekKollaResume.pdf"
                  className="projects-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
                <a
                  href="#projects"
                  className="linkedin-button"
                  rel="noopener noreferrer"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="section">
          <About />
        </div>
        <div id="resume" className="section">
          <Resume />
        </div>
        <div id="projects" className="section">
          <Projects />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>
      </div>
    );
  }
}

export default Home;
