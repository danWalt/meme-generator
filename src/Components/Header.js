import React from "react";
import Troll from "../images/troll-face.png";
import "../styles/style.css";

export default function Header() {
  return (
    <header className="header-div">
      <div className="left-side">
        <img className="troll--face" src={Troll}></img>
        <section className="meme--header">Meme Generator</section>
      </div>
      <section className="react-course-header">
        React Course - Project 3
      </section>
    </header>
  );
}
