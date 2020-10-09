import React from "react";
import style from "./Project.module.css";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const variants = {
  hidden: {

    y: 80
  },
  show: {

    y: 0
  }
}

const Block = ({ img, title, desc, url, tech, github }) => {

  const [ref, inView, entry] = useInView({ threshold: 0 });
  return (
    <motion.div
      className={style.project}
      variants={variants}
      initial="hidden"
      ref={ref}
      animate={inView ? "show" : "hidden"}
    >
      <div className={style.imgcon}>
        <img className={style.img} src={img} alt="image" />
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
