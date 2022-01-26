import React, { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function changeText(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getImageUrl() {
    const randomInt = Math.floor(
      Math.random() * allMemeImages.data.memes.length
    );
    let newMemeImageUrl = allMemeImages.data.memes[randomInt].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: newMemeImageUrl,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={changeText}
        ></input>
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={changeText}
        ></input>
        <button onClick={getImageUrl} className="generate-meme-button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
