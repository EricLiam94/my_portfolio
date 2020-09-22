import React from "react";
import style from "./style.module.css";
const Hobbies = () => {
  var hobbies = [
    {
      url: "https://sports.cbsimg.net/images/visual/whatshot/72313_Paul.jpg",
      name: "Basketball"
    },
    {
      url:
        "https://images.macrumors.com/t/8k-7BpnxpJjF0uXF-JQmDnaejPY=/800x0/article-new/2018/05/apple-music-note-800x420.jpg",
      name: "Music"
    },
    {
      url:
        "https://upload.wikimedia.org/wikipedia/en/5/53/Dota_2_Gameplay_Aug_2017.jpg",
      name: "Video Game"
    }
  ];

  return (
    <div id="hobby" className={style.container}>
      {hobbies.map((hobby, idx) => (
        <div key={idx} className={style.hobby}>
          <img className={style.img} src={hobby.url} alt="hobby" />
          <span className={style.name}>{hobby.name} </span>
        </div>
      ))}
    </div>
  );
};

export default Hobbies;
