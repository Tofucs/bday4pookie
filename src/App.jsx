import { useState, useEffect } from 'react'
import './App.css'
import cuddle from './assets/cuddling.jpg'
import pookie from './assets/mypookie.png'
import poookie from './assets/mypoookie.png'
import pooookie from './assets/my pooookie.png'
import cuddle1 from './assets/cuddling1.png'
import cuddle2 from './assets/cuddling2.png'
import cuddle3 from './assets/cuddling3.png'
import cuddle4 from './assets/cuddling4.png'
import peekaboo from './assets/orangepeek.jpg'
import jupi from './assets/jupi.png'
import soma from './assets/soma.png'
import flowersImage from "./assets/bouquet.png"
import poooookie from './assets/mypoooookie.jpg'
import pooooookie from './assets/IMG_2305.jpg'
import poooooookie from './assets/IMG_6347.jpg'
import pooooooookie from './assets/IMG_6772.jpg'

function App() {
  const [messageDisplayed, setMessageDisplayed] = useState(false);
  const [imagesDisplayed, setImagesDisplayed] = useState([]);
  const [userName, setUserName] = useState('');
  const [showDialogue, setShowDialogue] = useState(true);
  const [dancing, setDancing] = useState(false);

  useEffect(() => {
    if (!messageDisplayed) {
      const intervalId = setInterval(() => {
        const newImg = {
          id: Math.random(),
          url: images[Math.floor(Math.random() * images.length)],
          style: {
            position: 'absolute',
            left: `${Math.random() * (window.innerWidth - 200)}px`,
            top: `${Math.random() * (window.innerHeight - 200)}px`,
            opacity: 1,
          }
        };
        setImagesDisplayed(currentImages => [...currentImages, newImg]);
        setTimeout(() => {
          setImagesDisplayed(currentImages => currentImages.filter(img => img.id !== newImg.id));
        }, 5000);
      }, 500);

      return () => clearInterval(intervalId);
    }
  }, []);

  const handleUserChoice = (choice) => {
    if (choice === "alma") {
      setUserName("Alma");
      setDancing(true);
      setTimeout(() => {
        setShowDialogue(false);
        setDancing(false);
      }, 3000);
    } else {
      setUserName("Not Alma");
    }
  };

  const handleButtonClick = () => {
    setMessageDisplayed(true);
  };

  const images = [
    pookie,
    poookie,
    pooookie,
    cuddle,
    cuddle1,
    cuddle2,
    cuddle3,
    cuddle4,
    soma,
    jupi,
    poooookie,
    pooooookie,
    poooooookie,
    pooooooookie
  ]

  return (
    <div className="App">
      {messageDisplayed ? <div className="float-container">
        {imagesDisplayed.map(image => (
          <img key={image.id} src={image.url} alt="Decorative" style={image.style} className="floating-image" />
        ))}</div> : <div></div>}
      <div className="content">
        {!messageDisplayed ? <div className="content">
          {!showDialogue ?
            <button onClick={handleButtonClick} className="button">
              <span className='button-text'>Guess what day it is :3</span>
              <img src={soma} alt="Orange Cat" className="cat-image" />
            </button>
            :
            <div>
              <img src={soma} alt="Soma" className="cat-dialouge" style={{ animation: dancing ? 'dance 1s infinite' : 'none' }} />
              {dancing && <img src={flowersImage} alt="Flowers" className="flower-image" />}
              <p>{userName === "Alma" ? `OMG hi my special pookie!` : userName === "Not Alma" ? "wheres my pookie >:(" : `What's your name?`}</p>
              <button className="happy-birthday" onClick={() => handleUserChoice("alma")}>Alma</button>
              <button className="happy-birthday" onClick={() => handleUserChoice("not alma")}>Not Alma</button>
            </div>
          }
        </div> :
          <h1 className='happy-birthday'>Happy 19th Birthday Pookie! 🎉</h1>
        }
      </div>
      {!messageDisplayed ?
        <p className="read-the-docs">
          click the text!
        </p> :
        <p className="button-text">
          i love u my black cat :3
        </p>}
    </div>
  )
}

export default App
