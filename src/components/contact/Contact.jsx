import React from "react";
import "./contact.css";
import {
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div class="container contact__container">
        <div className="contact__cards">
          <div className="contact__card">
            <div className="card__icon">
              <AiOutlineMail />
            </div>
            <h3>Email</h3>
            <h4>Support@gmail.com</h4>
            <a href="#a">Send a Message</a>
          </div>
          <div className="contact__card">
            <div className="card__icon">
              <AiOutlineMessage />
            </div>
            <h3>Messenger</h3>
            <h4>yatinvohra</h4>
            <a href="#a">Send a Message</a>
          </div>
          <div className="contact__card">
            <div className="card__icon">
              <AiOutlineWhatsApp />
            </div>
            <h3>Whatsapp</h3>
            <h4>+91-7042414212</h4>
            <a href="#a">Send a Message</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
