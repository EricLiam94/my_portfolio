import React from "react";
import style from "./Project.module.css";
const Block = ({ img, title, desc, url, tech, github }) => {
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
        <div style={{ marginTop: "20px" }}>
          {url && (
            <a href={url} target="_blank" className={style.redirect}>
              <i class="fab fa-internet-explorer"></i>
            </a>
          )}
          {github && (
            <a href={github} target="_blank" className={style.redirect}>
              <i class="fab fa-github-alt"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Block;
