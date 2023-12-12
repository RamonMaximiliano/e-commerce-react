import { Carousel } from "../Carousel/Carousel";
import { Release } from "../Release/Release";
import "./styles.css";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <Release />
    </div>
  );
};
