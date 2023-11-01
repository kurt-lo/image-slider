import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const App = () => {

  const [isImage, setIsImage] = useState(0);

  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];

  const handleNextImage = () => {
    // setIsImage(function(index) {
    //   return (index + 1) % images.length;
    // });
    setIsImage((index) => (index + 1) % images.length);
  }

  const handlePrevImage = () => {
    setIsImage((index) => (index - 1 + images.length) % images.length);
  }

  return (
    <div className="h-screen bg-slate-900 p-[1rem]">
      <h1 className="font-bold text-center text-slate-300 text-[2rem]">
        Image Slider Practice
      </h1>
      <div className="flex items-center justify-evenly pt-[4rem]">
        <button onClick={handlePrevImage}><FontAwesomeIcon icon={faArrowLeft} className=" text-slate-300 text-[5rem]" /></button>
        {images.map((image, index) => (
          isImage === index && (
            <div key={image}>
              <img src={image} alt="images" className="object-contain h-[48.3rem]"/>
            </div>
          )))}
        <button onClick={handleNextImage}><FontAwesomeIcon icon={faArrowRight} className=" text-slate-300 text-[5rem]" /></button>
      </div>
    </div>
  )
}

export default App