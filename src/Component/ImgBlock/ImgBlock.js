import React from "react";
import style from "./block.module.css";

const ImgBlock = ({ url, title }) => {
  const myStyle = { backgroundImage: "url(" + url + ")" };
  return (
    <div className={style.container} style={myStyle}>
      <span className={style.title}>{title}</span>
    </div>
  );
};

export default ImgBlock;
