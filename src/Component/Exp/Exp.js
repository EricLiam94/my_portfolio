import React from "react";
import style from "./Exp.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import bg from "../Header/space.jpg";
import Icon from "./Icon";

const Exp = () => {
  var url =
    "https://images.unsplash.com/photo-1581459641273-9f5f7b4be2df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80";
  var className = "vertical-timeline-element--work";
  var contentStyle = { background: "white", color: "black" };
  var contentArrowStyle = { borderRight: "7px solid  rgb(33, 150, 243)" };
  var importantContent = { background: "rgb(33, 150, 243)", color: "black" };
  var iconStyle = {
    background: "rgb(33, 150, 243)",
    color: "#000"
  };
  return (
    <div id="exp" className={style.container}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className={className}
          contentArrowStyle={contentArrowStyle}
          contentStyle={importantContent}
          iconStyle={iconStyle}
          date="2018-2019"
          icon={<Icon type="study" />}
        >
          <div style={{ color: "white" }}>
            <h3 className="vertical-timeline-element-title">
              Master of Information Technology
            </h3>
            <h4 className={style.subtitle}>Monash</h4>
            Scholarship: IT international Merit Scholarship
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={className}
          contentArrowStyle={contentArrowStyle}
          contentStyle={contentStyle}
          iconStyle={iconStyle}
          date="2018"
          icon={<Icon />}
        >
          <div>
            <h3 className="vertical-timeline-element-title">
              JAVA Bootcamp Volunteer:
            </h3>
            <h4 className={style.subtitle}>Monash</h4> Tutoring and Motivating
            freshmen basic JAVA programing
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={className}
          contentArrowStyle={contentArrowStyle}
          contentStyle={contentStyle}
          iconStyle={iconStyle}
          date="2017"
          icon={<Icon />}
        >
          <h3 className="vertical-timeline-element-title">
            Quality Assurance Analyst
          </h3>
          <h4 className={style.subtitle}>ZhanChen Painting Company</h4>
          <ul>
            <li>Cooperating with workshop staffs </li>
            <li> Testing and analyzing products</li>
            <li> Conducting adjustment according to analysis result</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={className}
          contentArrowStyle={contentArrowStyle}
          contentStyle={contentStyle}
          iconStyle={iconStyle}
          date="2012-2016"
          icon={<Icon type="study" />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachlor of Polymer Materials
          </h3>
          <h4 className={style.subtitle}>SUES</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={className}
          iconStyle={{
            background: "rgb(133, 150, 243)",
            color: "#000"
          }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Exp;
