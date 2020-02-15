import React, { useState } from "react";
import style from "./sidebar.module.css";

const Sidebar = () => {
  const [toggle, settoggle] = useState(false);
  const clickHandler = () => {
    settoggle(!toggle);
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className={(toggle ? style.showmoblie : " ") + " " + style.sidebar}>
        <ul className={style.ul}>
          <li>
            {" "}
            <a onClick={scrollTop} className={style.elem}>
              <i className="fas fa-home"></i>
              <span>Home </span>
            </a>{" "}
          </li>
          <li>
            <a href="#skill" className={style.elem}>
              <i className="fas fa-terminal"></i>
              <span>Skills </span>
            </a>{" "}
          </li>
          <li>
            <a href="#project" className={style.elem}>
              <i className="fas fa-tasks"></i>
              <span>Projects </span>
            </a>{" "}
          </li>
          <li>
            <a href="#exp" className={style.elem}>
              <i className="fas fa-book-open"></i>
              <span>Experience </span>
            </a>{" "}
          </li>
          <li>
            <a href="#hobby" className={style.elem}>
              <i className="fas fa-running"></i>
              <span>Hobbies </span>
            </a>{" "}
          </li>
          <li>
            <a href="#contact" className={style.elem}>
              <i className="fas fa-phone-alt"></i>
              <span>Contact </span>
            </a>{" "}
          </li>
        </ul>
      </div>
      <div className={style.mobilebt}>
        {" "}
        <i className="fas fa-bars" onClick={clickHandler}></i>{" "}
      </div>
    </div>
  );
};

export default Sidebar;
