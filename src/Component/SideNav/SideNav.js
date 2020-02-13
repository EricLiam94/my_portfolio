import React from "react";
import style from "./sidebar.module.css";

const Sidebar = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={style.sidebar}>
      <ul className={style.ul}>
        <li>
          {" "}
          <a onClick={scrollTop} className={style.elem}>
            <i class="fas fa-home"></i>
            <span>Home </span>
          </a>{" "}
        </li>
        <li>
          <a href="#skill" className={style.elem}>
            <i class="fas fa-terminal"></i>
            <span>Skills </span>
          </a>{" "}
        </li>
        <li>
          <a href="#exp" className={style.elem}>
            <i class="fas fa-book-open"></i>
            <span>Experience </span>
          </a>{" "}
        </li>
        <li>
          <a href="#project" className={style.elem}>
            <i class="fas fa-tasks"></i>
            <span>Projects </span>
          </a>{" "}
        </li>
        <li>
          <a href="#hobby" className={style.elem}>
            <i class="fas fa-running"></i>
            <span>Hobbies </span>
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
