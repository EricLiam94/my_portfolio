import React from "react";
import style from "./Project.module.css";
import projects from "./myprojects";
import Block from "./Block";

const Projects = () => {
  return (
    <div id="project">
      <div className={style.warn}>
        These applications may take 10 - 30 seconds to awake. Please be patient.{" "}
      </div>
      <div className={style.container}>
        {projects.map((pro, idx) => (
          <Block
            key={idx}
            img={pro.img}
            title={pro.title}
            desc={pro.desc}
            url={pro.url}
            tech={pro.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
