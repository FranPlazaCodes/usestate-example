import React from 'react';
import './App.css';
import cat1 from './images/cat1.png';
import cat2 from './images/cat2.png';
import cat3 from './images/cat3.png';

interface catImg {
  id: number,
  location: string,
}

const catImages: catImg[] = [
  { id: 0, location: cat1 },
  { id: 1, location: cat2 },
  { id: 2, location: cat3 }
];

function App() {
  const [currentImg, setCurrentImg] = React.useState<catImg>(catImages[0]);

  function changePicture() {
    const nextIndex = currentImg.id + 1 === catImages.length ? 0 : currentImg.id + 1;
    setCurrentImg(catImages[nextIndex]);
  }

  return (
    <div className="App">
      <button onClick={changePicture}>CHANGE THE CAT!!! 🙀🙀🙀</button>
      <img
        src={currentImg.location}
        alt='Cat looking at the camera'
      ></img>
    </div>
  );
}

export default App;
