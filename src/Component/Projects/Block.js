import React from "react";
import style from "./Project.module.css";
const Block = ({ img, title, desc, url }) => {
  const clickHandler = () => {
    window.open(url, "_blank");
  };
  console.log(url);
  return (
    <div className={style.project}>
      <div className={style.imgcon}>
        <img className={style.img} src={img} />
        <div className={style.back}> {desc} </div>
      </div>
      <div className={style.title} onClick={clickHandler}>
        {title}
      </div>
    </div>
  );
};

export default Block;
