import "./styles.css";

type carousel = {
  id: number;
  image: string;
};

export const CarouselItem = (props: carousel) => {
  return (
    <>
      <img className="main-carousel-item" src={props.image} />
    </>
  );
};
