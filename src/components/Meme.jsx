import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/1bij.jpg",
  });

  function handleText(event) {
    const { value, name } = event.target;

    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }
  console.log(meme.topText);
  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          onChange={handleText}
          value={meme.topText}
          className="form--input"
        />
        <input
          type="text"
          name="bottomText"
          onChange={handleText}
          value={meme.bottomText}
          className="form--input"
        />
        <button className="form--button">Generate a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.image} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
