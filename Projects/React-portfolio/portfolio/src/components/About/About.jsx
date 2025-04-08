import React from "react";
import "./About.css";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={profile_img}
            alt=""
            height="475px
          "
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am experineced Fullstack Developer with over a decode of
              professional expertise in the field.I specialize in building
              scalable web applications and delivering end-to-end solutions,
              from frontend design to backend architecture.
            </p>
            <p>
              Proficient in modern frameworks and tools, ensuring seamless user
              experiences and robust backend systems.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "45%" }} />
            </div>

            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "40%" }} />
            </div>

            <div className="about-skill">
              <p>Node.js & Express</p>
              <hr style={{ width: "35%" }} />
            </div>

            <div className="about-skill">
              <p>Django</p>
              <hr style={{ width: "30%" }} />
            </div>

            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+ </h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
