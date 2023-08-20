import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const imgLink =
  "https://images.unsplash.com/photo-1520423465871-0866049020b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2624&q=80";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div class="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <div className="about__img__block"></div>
            <img src={imgLink} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div className="about__icon">
                <FaAward />
              </div>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <div className="about__icon">
                <FiUsers />
              </div>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <div className="about__icon">
                <VscFolderLibrary />
              </div>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <div className="about__contexttext">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati voluptates nesciunt nemo molestiae, delectus consectetur
              officia, eius quod ad, porro ex laboriosam dolorum? Officiis minus
              laboriosam debitis sapiente a nulla.
            </p>
          </div>
          <div className="about__contact_button">
            <button className="btn btn-primary">Let's Talk</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
