import { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-section">
        <div className="projects-header">
          <h1 className="big">Projects</h1>
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">Below are the projects</p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <video
              className="project-video"
              src="/first.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <h2 className="project-name">
              Data Visualization on COVID-19 day to day analysis{" "}
            </h2>
            <p className="project-description">
              This module consists of three main parts and uses several
              important libraries to process and visualize COVID-19 dataset CSV
              files. Pandas is used for data analysis and acts as a high-level
              wrapper over NumPy and Matplotlib, providing faster, cleaner data
              manipulation. NumPy supports efficient array operations, offering
              up to 50x faster performance than Python lists and enabling
              mathematical computations essential in data science. Regular
              Expressions (RegEx), through Python’s re module, help identify and
              extract text patterns within the data. The time module is used for
              handling time-based operations and performance measurement. For
              visualization, Matplotlib provides 2D plotting capabilities such
              as line, bar, scatter, and histogram charts, while Plotly offers
              interactive visualizations widely used in data science.
              Additionally, PyWebIO is used to build simple browser-based
              applications that interactively display results, and Pygame
              supports multimedia functionality when needed. After processing
              and preparing the raw COVID-19 data, these tools collectively
              allow the creation of rich, interactive visualizations for
              effective analysis.
            </p>
          </div>

          <div className="project-card">
            <video
              className="project-video"
              src="/second.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
            <h2 className="project-name">User Authentication Using Image</h2>
            <p className="project-description">
              The system works by creating a front-end using HTML and CSS and
              displaying it to the user through Flask. It collects user details
              such as name, user ID, password, and confirm password, validates
              the input, and stores the information in a MySQL database. The
              user’s image is then captured using OpenCV, and the face is
              detected using the Haarcascade Frontal Face Classifier; the image
              is repeatedly captured until a clear face is detected and is then
              stored in the database. During login, the user ID is validated
              against the database, and a new image is captured for
              verification. The face_recognition library compares this image
              with the stored one and returns either true or false. If true, the
              user is redirected to the emotion recognition page where DeepFace
              analyzes their emotion; if false, the system redirects the user to
              a thank-you page.
            </p>
          </div>

          <div className="project-card">
            <div className="project-videos">
              <video
                className="project-video"
                src="/example.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <h2 className="project-name">
              {" "}
              Detection and Analysis of Objects in Video Sequences
            </h2>
            <p className="project-description">
              Identifying and analyzing elements in a video is challenging due
              to variations in lighting, changes in subject appearance, and
              distracting background elements. In this, YOLOv5 was employed to
              extract and classify objects from video frames. A custom dataset
              named "Detection" was created using Python-based object detection
              techniques and includes multiple categories of images. YOLOv5 was
              trained and fine-tuned on this annotated dataset to accurately
              detect real-time objects such as humans, dogs, and rifles, with
              enhanced speed and precision. The resulting model generates
              bounding boxes for detected objects and labels each one with its
              name, using distinct colors to make recognition clearer and more
              intuitive.
            </p>
          </div>
        </div>
        <p className="projects-p">
          {" "}
          <a
            href="https://github.com/omvivek"
            className="projects-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </p>
      </div>
    );
  }
}

export default Projects;
