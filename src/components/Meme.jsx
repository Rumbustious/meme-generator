import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((dataObj) => setAllMemes(dataObj.data.memes));
  }, []);

  function getNewMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    setMeme((prevMeme) => (
        { ...prevMeme,
             image: allMemes[randomNumber].url })
        );
  }

  function handleText(event) {
    const { value, name } = event.target;

    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

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
        <button className="form--button" onClick={getNewMeme}>
          Generate a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.image} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
