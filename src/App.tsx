import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

const images = [
  { url: "./src/assets/images/001.jpg", alt: "Image 1" },
  { url: "./src/assets/images/002.jpg", alt: "Image 2" },
  { url: "./src/assets/images/003.jpg", alt: "Image 3" },
  { url: "./src/assets/images/004.jpg", alt: "Image 4" },
  { url: "./src/assets/images/005.jpg", alt: "Image 5" },
];

function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Image Carousel</h1>
        <img src={images[index].url} alt={images[index].alt} className="carousel-image" />
        <div className="carousel-buttons">
          <button
            className="carousel-buttons-prev"
            onClick={() => {
              handlePrev();
            }}
          >
            Previous
          </button>
          <button
            className="carousel-buttons-next"
            onClick={() => {
              handleNext();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
