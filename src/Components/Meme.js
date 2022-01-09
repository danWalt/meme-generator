import React from "react";

export default function Meme() {
  return (
    <main>
      <form className="form">
        <input className="form--input" type="text" value="shut up"></input>
        <input
          className="form--input"
          type="text"
          value="and take my money"
        ></input>
        <button className="generate-meme-button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
