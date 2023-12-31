import React from 'react';
import './header.css';
import CTA from './CTA';
import me from "../../assets/images/portrait-bg.png";
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
   <header id="home">
    <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yatin Vohra</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
            <img src={me} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

        
    </div>
   </header>
  )
}

export default Header