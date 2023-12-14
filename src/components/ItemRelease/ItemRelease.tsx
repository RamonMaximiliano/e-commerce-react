import "./styles.css";
import { prod } from "../../App";
import MyContext from "../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import blankStart from "../../images/hollywood-star-blank.png";
import yellowStart from "../../images/hollywood-star-yellow.png";

export const ItemRelease = (props: prod) => {
  const { setDetailID } = useContext(MyContext);

  return (
    <div className="itemRelease">
      <img className="itemRelease-image" src={props.image}></img>
      <h4>{props.title}</h4>
      <div className="bottom-release">
        <div className="rating">
          <img className="rating-image" src={Number(props.rating?.rate) >= 1 ? yellowStart: blankStart }></img>
          <img className="rating-image" src={Number(props.rating?.rate) >= 2 ? yellowStart: blankStart }></img>
          <img className="rating-image" src={Number(props.rating?.rate) >= 3 ? yellowStart: blankStart }></img>
          <img className="rating-image" src={Number(props.rating?.rate) >= 4 ? yellowStart: blankStart }></img>
          <img className="rating-image" src={Number(props.rating?.rate) >= 5 ? yellowStart: blankStart }></img>
        </div>
        <Link
          to="/Details"
          className="release-details"
          onClick={() => setDetailID(props.id)}
        >
          <button id={props.id.toString()} className="releaseButton">
            Check Details
          </button>
        </Link>
      </div>
    </div>
  );
};
