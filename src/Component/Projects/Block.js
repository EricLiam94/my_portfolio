import React from "react";
import style from "./Project.module.css";
const Block = ({ img, title, desc, url, tech }) => {
  return (
    <div className={style.project}>
      <div className={style.imgcon}>
        <img className={style.img} src={img} />
      </div>
      <div className={style.content}>
        <h1>{title} </h1>
        <p>{desc} </p>
        <h3>Tech used: </h3>
        <ul className={style.tech}>
          {tech.map(i => (
            <li>{i} </li>
          ))}
        </ul>
        <a href={url} target="_blank" className={style.redirect}>
          {" "}
          View it <i className="fas fa-hand-point-right"></i>{" "}
        </a>
      </div>
    </div>
  );
};

export default Block;
