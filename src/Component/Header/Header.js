import React from "react";
import style from "./Header.module.css";

const Header = () => {
  const img = require("./space.jpg");
  const clickHandler = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div className={style.container}>
      <div className={style.title}>
        {" "}
        <span> Eric's Portfolio </span>
        <div onClick={clickHandler} className={style.icon}>
          <i className="fas fa-mobile-alt"></i>
          <i className="fas fa-envelope"></i>
          <i className="fab fa-github"></i>
        </div>
      </div>
      <div className={style.bg}> </div>
    </div>
  );
};

export default Header;
