import "./styles.css";

type carousel = {
  id: number;
  image: string;
};

export const CarouselItem = (props: carousel) => {
  return (
    <div>
      <img src={props.image} />
    </div>
  );
};
