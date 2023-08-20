import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Labels = [
  { name: "Home", id: "#home" },
  { name: "About", id: "#about" },
  { name: "Experience", id: "#experience" },
  { name: "Service", id: "#service" },
  { name: "Portfolio", id: "#portfolio" },
  { name: "Testimonials", id: "#testimonials" },
  { name: "Contact", id: "#contact" },
];
const Footer = () => {
  return (
    <section id="footer">
      <div class="container footer__container">
        <h1>NAVIGATE</h1>
        <div className="footer__nav hidden">
          {Labels.map((obj) => {
            return <a href={obj.id}>{obj.name}</a>;
          })}
        </div>
        <div className="footer__social_icons">
          <div>
            <BsFacebook />
          </div>
          <div>
            <BsInstagram />
          </div>
          <div>
            <BsTwitter />
          </div>
        </div>
        <div className="footer__end">
          <p>©2023 YatinVohra | All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
