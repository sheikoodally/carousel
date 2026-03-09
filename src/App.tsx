import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

const data = [
  { url: "./src/assets/images/001.jpg", alt: "Image 1" },
  { url: "./src/assets/images/002.jpg", alt: "Image 2" },
  { url: "./src/assets/images/003.jpg", alt: "Image 3" },
  { url: "./src/assets/images/004.jpg", alt: "Image 4" },
  { url: "./src/assets/images/005.jpg", alt: "Image 5" },
];

const NavigationHandler = ({
  data,
  handleNavClick,
}: {
  data: { url: string; alt: string }[];
  handleNavClick: (index: number) => void;
}) => {
  return (
    <div className="navigation-handler">
      {data.map((item: { url: string; alt: string }, index: number) => (
        <span key={index} onClick={() => handleNavClick(index)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
};

function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNavClick = (index: number) => {
    setIndex(index);
  };

  return (
    <>
      <div className="container">
        <h1>Image Carousel</h1>
        <img src={data[index].url} alt={data[index].alt} className="carousel-image" />
        <NavigationHandler data={data} handleNavClick={handleNavClick} />
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
