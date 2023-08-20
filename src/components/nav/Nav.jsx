import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
const Nav = () => {
  const [active, setactive] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        className={active === "#" ? "active" : ""}
        onClick={() => {
          setactive("#");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => {
          setactive("#about");
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={active === "#experience" ? "active" : ""}
        onClick={() => {
          setactive("#experience");
        }}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={active === "#services" ? "active" : ""}
        onClick={() => {
          setactive("#services");
        }}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => {
          setactive("#contact");
        }}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
