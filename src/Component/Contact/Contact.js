import React from "react";
import style from "./contact.module.css";
import contact from "./mycontact";

const Contact = () => {
  return (
    <div id="contact" className={style.container}>
      <div className={style.card}>
        <i className="fas fa-mobile-alt"></i>
        {contact.phone}
      </div>
      <div className={style.card}>
        <i className="fas fa-envelope"></i>
        {contact.email}
      </div>
      <div className={style.card}>
        <i className="fab fa-github"></i>
        {contact.github}
      </div>
    </div>
  );
};

export default Contact;
