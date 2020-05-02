import React, { useEffect } from "react";
import style from "./Header.module.css";
import Rellax from "rellax";

const Header = () => {
  useEffect(() => {
    var rellax = new Rellax(".rellax");
  }, []);

  const clickHandler = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div className={style.container}>
      <div className={style.title}>
        {" "}
        <span>Jingxin Huang </span> | <span> Eric</span>
        <div className={style.loc}> Melbourne </div>
        <div onClick={clickHandler} className={style.icon}>
          <i className="fas fa-mobile-alt rellax" data-rellax-speed="-2"></i>
          <i className="fas fa-envelope rellax" data-rellax-speed="-2"></i>
          <i className="fab fa-github rellax" data-rellax-speed="-2"></i>
        </div>
      </div>
      <div className={style.bg}> </div>
    </div>
  );
};

export default Header;
