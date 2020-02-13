import React from "react";
import style from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={style.intro}>
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
    </div>
  );
};

export default Intro;
