import "./styles.css";
import { prod } from "../../App";


export const ItemRelease = (props:prod) => {

  return (
        <div className="itemRelease">
        <img src={props.image}></img>
        <h4>{props.title}</h4>
        Customer rate: {props.rating?.rate}
        <button className="releaseButton">Check Details</button>
        </div>
  );
};

