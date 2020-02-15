import React from "react";
import style from "./tech.module.css";

const Technologies = () => {
  var techList = [
    "Node.js",
    "Java",
    "Python",
    "MangoDB",
    "SQL",
    "React.JS",
    "JavaScript",
    "HTML",
    "Spark",
    "ML",
    "R",
    "Git",
    "Redis",
    "Redux",
    "Linux CL",
    "AWS",
    "Google Cloud",
    "Heroku",
    "Docker",
    "Android",
    "CSS",
    "SCSS",
    "Bootstrap",
    "Webpack"
  ];

  return (
    <div id="skill" className={style.container}>
      {techList.map((item, idx) => (
        <span key={idx} className={style.tech}>
          {" "}
          {item}{" "}
        </span>
      ))}
    </div>
  );
};
export default Technologies;
