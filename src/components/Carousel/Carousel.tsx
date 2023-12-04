import "./styles.css";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import image1 from "../../images/Carrousel/image1.jpg";
import image2 from "../../images/Carrousel/image2.jpg";
import image3 from "../../images/Carrousel/image3.jpg";

type carousel = {
  id: number;
  image: string;
};

export const Carousel = () => {
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

  return (
    <>
      <div>
        <h2>Hello there!</h2>
      </div>
      <div className="main-carousel-div">
        <div className="inner-carousel">
          {carouselImages.map((item: carousel) => {
            return (
              <CarouselItem key={item.id} id={item.id} image={item.image} />
            );
          })}
        </div>
        <div className="arrow-buttons">
          <span className="material-symbols-outlined">arrow_back_ios</span>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
      </div>
    </>
  );
};
