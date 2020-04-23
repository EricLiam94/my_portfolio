import React from "react";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className={style.container}>
      <div className={style.card}>
        <i className="fas fa-mobile-alt"></i>
        {process.env.REACT_APP_PHONE}
      </div>
      <div className={style.card}>
        <i className="fas fa-envelope"></i>
        {process.env.REACT_APP_EMAIL}
      </div>
      <div className={style.card}>
        <i className="fab fa-github"></i>
        {process.env.REACT_APP_GITHUB}
      </div>
    </div>
  );
};

export default Contact;
