import React from "react";
import style from "./Project.module.css";
import { motion } from "framer-motion";
const Block = ({ img, title, desc, url, tech, github }) => {
  return (
    <motion.div
      className={style.project}
      whileHover={{
        position: "relative",
        zIndex: 1,
        background: "white",

        x: [0, 10, -10, 0],
        transition: {
          duration: 0.2,
        },
      }}
    >
      <div className={style.imgcon}>
        <img className={style.img} src={img} />
      </div>
      <div className={style.content}>
        <h1>{title} </h1>
        <p>{desc} </p>
        <h3>Technologies</h3>
        <hr className={style.green} />
        <ul className={style.tech}>
          {tech.map((i) => (
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
    </motion.div>
  );
};

export default Block;
