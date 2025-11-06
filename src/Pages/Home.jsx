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
              <p>HELLO !</p>
              <h1>
                <span>I'm </span> Om Vivek
              </h1>
              <h4 id="typing-animation">Associate Technical Support</h4>
            </div>
          </div>
        </div>
        <div id="about" className="section">
          <About/>
        </div>
        <div id="resume" className="section">
          <Resume/>
        </div>
        <div id="projects" className="section">
          <Projects/>
        </div>
        <div id="contact" className="section">
          <Contact/>
        </div>
      </div>
    );
  }
}

export default Home;
