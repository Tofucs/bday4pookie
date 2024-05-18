import { useState } from 'react'
import './App.css'
import catCuddle from './assets/cuddling.jpg'

function App() {
  const [messageDisplayed, setMessageDisplayed] = useState(false);
  const [imagesDisplayed, setImagesDisplayed] = useState(false);

  const handleButtonClick = () => {
    setMessageDisplayed(true);
    setImagesDisplayed(true);
    setTimeout(() => {
      setImagesDisplayed(false);
    }, 5000); // Images will fade out after 5 seconds
  };

  const images = [
    './assets/mypookie.png',
    './assets/mypookie.png',
    './assets/mypookie.png',
  ]

  return (
    <div className="App">
      <div className="content">
        {!messageDisplayed ?
          <button onClick={handleButtonClick} className="button">
            <span className='button-text'>Guess what day it is :3</span>
            <img src={catCuddle} alt="Orange Cat" className="cat-image" />
          </button>
          :
          <h1>Happy Birthday Pookie! 🎉</h1>
        }
      </div>
      {!messageDisplayed ?
        <p className="read-the-docs">
          click the text!
        </p> :
        <p className="read-the-docs">
          i love u :3
        </p>}
    </div>
  )
}

export default App
