import React from "react";
import style from "./Intro.module.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -505 },
  visible: { opacity: 1, x: 0, transition: { duration: 3, ease: "easeOut" } },
};

const Intro = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={style.intro}
    >
      <div className={style.title}>Introduction</div>
      <div>
        <ul className={style.list}>
          <li>
            Seeking to take a graduate or junior application (web or Android)
            developing position{" "}
          </li>
          <li>Enthusiastic about delivering applications that people love </li>
          <li>Strong programming skills in Java, JavaScript and Python. </li>
          <li>Experienced Cloud Services such as AWS, Google Cloud, Heroku.</li>
          <li>Experienced in an Agile project with an international team.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Intro;
