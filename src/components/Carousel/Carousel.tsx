import "./styles.css";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import image1 from "../../images/Carrousel/image1.jpg";
import image2 from "../../images/Carrousel/image2.jpg";
import image3 from "../../images/Carrousel/image3.jpg";
import image4 from "../../images/Carrousel/image4.jpg";
import { useState, useEffect } from "react";

type carousel = {
  id: number;
  image: string;
};

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [clickedRight, setClickedRight] = useState(false);
  const [clickedLeft, setClickedLeft] = useState(false);
  const carouselImages: carousel[] = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
    {
      id: 4,
      image: image4,
    },
  ];

  const leftArrow = () => {
    if (index === 0) {
      setIndex(3);
    } else if (index === 1) {
      setIndex(0);
    } else if (index === 2) {
      setIndex(1);
    } else if (index === 3) {
      setIndex(2);
    }
  };
  const rightArrow = () => {
    if (index === 0) {
      setIndex(1);
    } else if (index === 1) {
      setIndex(2);
    } else if (index === 2) {
      setIndex(3);
    } else if (index === 3) {
      setIndex(0);
    }
  };

  const button0 = () => {
    setIndex(0);
  };
  const button1 = () => {
    setIndex(1);
  };
  const button2 = () => {
    setIndex(2);
  };
  const button3 = () => {
    setIndex(3);
  };

  let changeImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  useEffect(() => {
    const intervalId = setInterval(changeImage, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function clickRight() {
    setClickedRight(true);
    setTimeout(() => {
      setClickedRight(false);
    }, 150);
  }
  function clickLeft() {
    setClickedLeft(true);
    setTimeout(() => {
      setClickedLeft(false);
    }, 150);
  }

  return (
    <>
      <div className="home-title">
        <h2>Hello there!</h2>
      </div>
      <div className="main-carousel-div">
        <div
          className="inner-carousel"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {carouselImages.map((item: carousel) => {
            return (
              <CarouselItem key={item.id} id={item.id} image={item.image} />
            );
          })}
        </div>
        <div className="arrow-buttons">
          <div
            className={`arrow-left ${clickedLeft ? "clickedLeftClass" : ""}`}
            onClick={() => {
              leftArrow();
              clickLeft();
            }}
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          <div
            className={`arrow-right ${clickedRight ? "clickedRightClass" : ""}`}
            onClick={() => {
              rightArrow();
              clickRight();
            }}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        </div>
      </div>
      <div className="circle-buttons">
        {/* BUTTON 1 */}
        {index === 0 ? (
          <span className="material-symbols-outlined" onClick={() => button0()}>
            radio_button_checked
          </span>
        ) : (
          <span className="material-symbols-outlined" onClick={() => button0()}>
            radio_button_unchecked
          </span>
        )}
        {/* BUTTON 2 */}
        {index === 1 ? (
          <span className="material-symbols-outlined" onClick={() => button1()}>
            radio_button_checked
          </span>
        ) : (
          <span className="material-symbols-outlined" onClick={() => button1()}>
            radio_button_unchecked
          </span>
        )}
        {/* BUTTON 3 */}
        {index === 2 ? (
          <span className="material-symbols-outlined" onClick={() => button2()}>
            radio_button_checked
          </span>
        ) : (
          <span className="material-symbols-outlined" onClick={() => button2()}>
            radio_button_unchecked
          </span>
        )}
        {/* BUTTON 4 */}
        {index === 3 ? (
          <span className="material-symbols-outlined" onClick={() => button3()}>
            radio_button_checked
          </span>
        ) : (
          <span className="material-symbols-outlined" onClick={() => button3()}>
            radio_button_unchecked
          </span>
        )}
      </div>
    </>
  );
};
