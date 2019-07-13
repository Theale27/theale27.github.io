import React, { Component } from "react";
import "../styles/projects.scss";
import img_cmoq from "../img/CMoQ.jpg";
import img_faceRecognition from "../img/face-recognition.jpg";
import img_pokemonPairs from "../img/pokemon-pairs.jpg";
import img_robofriends from "../img/robofriends.jpg";

class Projects extends Component {
  render() {
    return (
      <main>
        <section id="projects-container">
          <div className="project">
            <img src={img_cmoq} alt="Project" />
            <div className="p-info">
              <h3>Chinese Museum of Queensland (CMoQ)</h3>
              <p>
                This website was an industry project with the University of the
                Sunshine Coast and was designed and developed as part of a 3
                person team using HTML, CSS, JavaScript, Bootstrap 3, and the
                Google Maps API.
                <br />I received a high distinction with 92%.
              </p>
              <div className="btns">
                <a href="http://cmoq.com.au/" className="live-btn">
                  Live
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="p-info">
              <h3>Websites made during University</h3>
              <hr />
              <p>
                <strong>Novacare Website</strong> - This website was made for a
                University assignment in 2014 and uses HTML, CSS,
                JavaScript/jQuery, and the image plugin lightbox.
              </p>
              <div className="btns">
                <a
                  href="https://theale27.github.io/Novacare-Website/index.html"
                  className="live-btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/theale27/Novacare-Website"
                  className="github-btn"
                >
                  GitHub
                </a>
              </div>
              <br />
              <p>
                <strong>Band Website</strong> - This website was made for a
                University assignment in 2016 which was to advertise a band's
                tour by providing a responsive webpage with an Australia theme.
                It uses HTML, CSS, JavaScript/jQuery, and PHP.
              </p>
              <div className="btns">
                <a
                  href="https://band-website-2016.herokuapp.com"
                  className="live-btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/theale27/Band-Website"
                  className="github-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="p-info">
              <h3>Other Sites</h3>
              <hr />
              <p>
                <strong>Video Sharing Site</strong> - This is a YouTube-like
                site that hosts videos and has social media aspects like
                comments, and profiles. It is made with React, JavaScript, HTML,
                Sass, and uses React Router for navigation.
              </p>
              <div className="btns">
                <a
                  href="https://video-sharing-site.herokuapp.com/"
                  className="live-btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/theale27/Video-Sharing-Site"
                  className="github-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <img src={img_faceRecognition} alt="Face Recognition App" />
            <div className="p-info">
              <h3>Face Recognition App</h3>
              <p
                className="p-description"
                data-hover="Javascript, HTML, CSS, API"
              >
                Built during the{" "}
                <a
                  href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/"
                  title="Udemy ZtM course"
                >
                  {" "}
                  Udemy ZtM course{" "}
                </a>
                with React, express.js, and bcrypt. It uses bcrypt to hash
                passwords for registered accounts and securely store them in a
                database created with PostgreSQL. Once signed in, the Clarafai
                Face Detection API is used to detect faces on submitted images.
                <br />
                <br />
              </p>
              <div className="btns">
                <a
                  href="https://smart-brain-27.herokuapp.com/"
                  className="live-btn"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <img src={img_robofriends} alt="Project" />
            <div className="p-info">
              <h3>RoboFriends</h3>
              <p>
                React Progressive Web App created during the Udemy{" "}
                <a
                  href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/"
                  title="Udemy ZtM course"
                >
                  ZtM course
                </a>{" "}
                and{" "}
                <a
                  href="https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/"
                  title="Udemy JtS course"
                >
                  JtS course
                </a>{" "}
                that filters the list of robots.
              </p>
              <div className="btns">
                <a
                  href="https://theale27.github.io/robofriends/"
                  className="live-btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/theale27/robofriends"
                  className="github-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <img src={img_pokemonPairs} alt="Pokemon Pairs" />
            <div className="p-info">
              <h3>Pokemon Pairs</h3>
              <p>
                This game was made for{" "}
                <a href="https://github.com/zero-to-mastery/coding_challenge-14">
                  {" "}
                  coding challenge 14{" "}
                </a>
                from the zero to mastery course. The challenge was to create a
                matching game with vanilla javascript that met the list of
                requirements.
              </p>
              <div className="btns">
                <a
                  href="https://theale27.github.io/pokemon-pairs/"
                  className="live-btn"
                >
                  Live
                </a>
                <a
                  href="https://github.com/theale27/pokemon-pairs"
                  className="github-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Projects;
