import "./styles.css";
import { prod } from "../../App";
import trash from "../../images/trash.png";
import { quantityItem } from "../Cart/Cart";

export const CartItem = (props: quantityItem) => {

  const itemTotal = props.quantity && props.price
    ? props.quantity * props.price
    : 0;

  return (
    <div className="prodInfo">
      <div className="prodInfo-column">
        <img className="prod-prop-image" src={props.image} />
      </div>
      <div className="prodInfo-column">
        <p>{props.title}</p>
      </div>
      <div className="prodInfo-column">
        <p>$ {props.price}</p>
      </div>
      <div className="prodInfo-column">
        <p>{props.quantity}</p>
      </div>
      <div className="prodInfo-column">
        <img className="prod-prop-trash" src={trash} onClick={() => props.delete && props.delete(props.id)}/>
      </div>
      <div className="prodInfo-column">
        <p>{itemTotal}</p>
      </div>
    </div>
  );
};
