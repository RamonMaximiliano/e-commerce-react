import { Carousel } from "../Carousel/Carousel";
import { Release } from "../Release/Release";
import { useEffect } from "react";
import "./styles.css";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Carousel />
      <Release />
    </div>
  );
};
