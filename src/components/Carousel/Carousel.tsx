import "./styles.css";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import image1 from "../../images/Carrousel/image1.jpg";
import image2 from "../../images/Carrousel/image2.jpg";
import image3 from "../../images/Carrousel/image3.jpg";
import { useState } from "react";

type carousel = {
  id: number;
  image: string;
};

export const Carousel = () => {
  const [index, setIndex] = useState(2);
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
  ];

  const leftArrow = () => {
    if (index === 0) {
      setIndex(2);
    } else if (index === 1) {
      setIndex(0);
    } else if (index === 2) {
      setIndex(1);
    }
  };
  const rightArrow = () => {
    if (index === 0) {
      setIndex(1);
    } else if (index === 1) {
      setIndex(2);
    } else if (index === 2) {
      setIndex(0);
    }
  };

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
          <div className="arrow-left" onClick={() => leftArrow()}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          <div className="arrow-right" onClick={() => rightArrow()}>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        </div>
      </div>
      <div className="circle-buttons">
        <span className="material-symbols-outlined">radio_button_unchecked</span>
        <span className="material-symbols-outlined">radio_button_checked</span>
        <span className="material-symbols-outlined">radio_button_checked</span>
      </div>
    </>
  );
};
