import "./styles.css";
import trash from "../../images/trash.png";
import { quantityItem } from "../../App";

export const CartItem = (props: quantityItem) => {
  const itemTotal =
    props.quantity && props.price ? props.quantity * props.price : 0;

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
        <div className="quantity-buttons">
        <p onClick={() => props.minus && props.minus(props.id)}>-</p>
        <p>{props.quantity}</p>
        <p onClick={() => props.plus && props.plus(props.id)}>+</p>
        </div>
      </div>
      <div className="prodInfo-column">
        <img
          className="prod-prop-trash"
          src={trash}
          onClick={() => props.delete && props.delete(props.id)}
        />
      </div>
      <div className="prodInfo-column">
        <p>$ {itemTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};
