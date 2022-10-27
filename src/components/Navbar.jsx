import React from "react";
import logoImg from "../assets/shared/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={logoImg} alt="" />
        </div>
        <div className="line"></div>
        <div className="nav__container">
          <ul>
            <li>
              <span>00</span>
              <a href="">HOME</a>
            </li>
            <li>
              <span>01</span>
              <a href="">DESTINATION</a>
            </li>
            <li>
              <span>02</span>
              <a href="">CREW</a>
            </li>
            <li>
              <span>03</span>
              <a href="">TECHNOLOGY</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
