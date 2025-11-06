import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      activeSection: "home",
    };
  }

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  };

  closeMenu = (section) => {
    this.setState({ open: false, activeSection: section });
  };

  render() {
    return (
      <header>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        ></link>

        <nav className="navbar">
          <div className="logo">Kolla Om Vivek</div>

          <ul className={`nav-links ${this.state.open ? "active" : ""}`}>
            <li>
              <a
                href="#home"
                onClick={() => this.closeMenu("home")}
                className={this.state.activeSection === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => this.closeMenu("about")}
                className={this.state.activeSection === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#resume"
                onClick={() => this.closeMenu("resume")}
                className={this.state.activeSection === "resume" ? "active" : ""}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => this.closeMenu("projects")}
                className={
                  this.state.activeSection === "projects" ? "active" : ""
                }
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => this.closeMenu("contact")}
                className={
                  this.state.activeSection === "contact" ? "active" : ""
                }
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="hamburger" onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
