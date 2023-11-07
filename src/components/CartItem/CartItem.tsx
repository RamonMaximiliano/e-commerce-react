import "./styles.css";
import { prod } from "../../App";
import trash from "../../images/trash.png";


export type cartItem = {
  id: number;
  title: string;
  price?: number;
  quantity?: number;
  total?: number;
};

export const CartItem = (props: prod) => {
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
        <p>132465</p>
      </div>
      <div className="prodInfo-column">
        <img className="prod-prop-trash" src={trash} />
      </div>
      <div className="prodInfo-column">
        <p>Item total:</p>
      </div>
    </div>
  );
};
