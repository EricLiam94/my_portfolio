import React from "react";
import style from "./Exp.module.css";

const Icon = ({ type }) => {
  return (
    <i
      className={
        "fas " +
        style.icon +
        (type === "study" ? " fa-graduation-cap" : " fa-briefcase ")
      }
    ></i>
  );
};

export default Icon;
