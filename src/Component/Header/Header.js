import React from "react";
import style from "./Header.module.css";

const Header = () => {
  const img = require("./space.jpg");
  return (
    <div className={style.container}>
      <div className={style.title}> Eric's Portfolio </div>
    </div>
  );
};

export default Header;
