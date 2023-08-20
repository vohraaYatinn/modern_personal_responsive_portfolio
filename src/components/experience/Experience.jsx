import React from "react";
import "./experience.css";
import { MdVerified } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Experience</h2>
      <div class="container experience__container">
        <div className="experience__frontend">
          <div className="experience__head">FrontEnd I Know</div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                HTML<span>Experienced</span>
              </div>
            </div>
          </div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                CSS<span>Experienced</span>
              </div>
            </div>
          </div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                JAVASCRIPT<span>Experienced</span>
              </div>
            </div>
          </div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                REACT<span>Experienced</span>
              </div>
            </div>
          </div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                ANGULAR<span>Experienced</span>
              </div>
            </div>
          </div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                BOOTSTRAP<span>Experienced</span>
              </div>
            </div>
          </div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                TAILWIND<span>Experienced</span>
              </div>
            </div>
          </div>
        </div>
        <div className="experience__backend">
          <div className="experience__head">BackEnd I Know</div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                HTML<span>Experienced</span>
              </div>
            </div>
          </div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                CSS<span>Experienced</span>
              </div>
            </div>
          </div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                JAVASCRIPT<span>Experienced</span>
              </div>
            </div>
          </div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                REACT<span>Experienced</span>
              </div>
            </div>
          </div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                ANGULAR<span>Experienced</span>
              </div>
            </div>
          </div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                BOOTSTRAP<span>Experienced</span>
              </div>
            </div>
          </div>
          <div className="experience__content">
            <div>
              <MdVerified className="icon-verified" />
              <div>
                TAILWIND<span>Experienced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
