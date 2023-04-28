import React from "react";

export default function Meme() {
  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" />
        <input type="text" className="form--input"/>
        <button className="form--button">Generate a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src="http://i.imgflip.com/1bij.jpg" className="meme--image" />
        <h2 className="meme--text top"></h2>
        <h2 className="meme--text bottom"></h2>
      </div>
    </main>
  );
}
