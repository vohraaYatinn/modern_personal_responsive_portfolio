import React from "react";
import "./portfolio.css";
import CardsButton from "./CardsButtons";
import portImg from "../../assets/images/Portfolio/port1.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div class="container portfolio__container">
        <div className="portfolio__card">
          <div className="card__img">
            <img src={portImg} alt="" />
          </div>
          <div className="card_content">
            <p>Portfolio Title</p>
            <div className="cards__button">
              <CardsButton />
            </div>
          </div>
        </div>
        <div className="portfolio__card">
          <div className="card__img">
            <img src={portImg} alt="" />
          </div>
          <div className="card_content">
            <p>Portfolio Title</p>
            <div className="cards__button">
              <CardsButton />
            </div>
          </div>
        </div>
        <div className="portfolio__card">
          <div className="card__img">
            <img src={portImg} alt="" />
          </div>
          <div className="card_content">
            <p>Portfolio Title</p>
            <div className="cards__button">
              <CardsButton />
            </div>
          </div>
        </div>
        <div className="portfolio__card hidden">
          <div className="card__img">
            <img src={portImg} alt="" />
          </div>
          <div className="card_content">
            <p>Portfolio Title</p>
            <div className="cards__button">
              <CardsButton />
            </div>
          </div>
        </div>
        <div className="portfolio__card hidden">
          <div className="card__img">
            <img src={portImg} alt="" />
          </div>
          <div className="card_content">
            <p>Portfolio Title</p>
            <div className="cards__button">
              <CardsButton />
            </div>
          </div>
        </div>
        <div className="portfolio__card hidden">
          <div className="card__img">
            <img src={portImg} alt="" />
          </div>
          <div className="card_content">
            <p>Portfolio Title</p>
            <div className="cards__button">
              <CardsButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
