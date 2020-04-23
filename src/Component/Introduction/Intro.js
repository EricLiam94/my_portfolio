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
      <div className={style.ctitle}> Career Planning </div>
      <div className={style.career}>
        {" "}
        For now, as a graduate, I would like to try a variety of developing
        roles to expand my knowledge pool and network, and in the next two
        years, I intend to apply for Permanent Residency and also take AWS
        solution architect certification. But my ultimate goal is to become an
        Algorithm Engineer.
      </div>
    </div>
  );
};

export default Intro;
