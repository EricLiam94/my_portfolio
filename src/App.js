import React from "react";

import Header from "./Component/Header/Header";
import Intro from "./Component/Introduction/Intro";
import ImageBlock from "./Component/ImgBlock/ImgBlock";
import Technologies from "./Component/Technologies/Technologies";
import Exp from "./Component/Exp/Exp";
import Projects from "./Component/Projects/Projects";
import Hobbies from "./Component/Hobby/Hobbies";
import Sidebar from "./Component/SideNav/SideNav";
import "./App.css";

function App() {
  const techUrl =
    "https://images.unsplash.com/photo-1573496005375-5c898f5275e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
  const expUrl =
    "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80";
  const projectUrl =
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
  const hobbiesUrl =
    "https://images.unsplash.com/photo-1556168505-d00e911d52eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80";
  return (
    <div className="App">
      <Header />
      <Intro />
      <ImageBlock title="What I know" url={techUrl} />
      <Technologies />
      <ImageBlock title="My Experience" url={expUrl} />
      <Exp />
      <ImageBlock title="My projects" url={projectUrl} />
      <Projects />
      <ImageBlock title="My Hobbies" url={hobbiesUrl} />
      <Hobbies />
      <Sidebar />
    </div>
  );
}

export default App;
