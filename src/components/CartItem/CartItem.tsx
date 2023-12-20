import "./styles.css";
import trash from "../../images/trash.png";
import { quantityItem } from "../../App";
import { useState } from "react";

export const CartItem = (props: quantityItem) => {
  const [clickedMinus, setClickedMinus] = useState(false);
  const [clickedPlus, setClickedPlus] = useState(false);
  const itemTotal =
    props.quantity && props.price ? props.quantity * props.price : 0;

  function clickMinus() {
    setClickedMinus(true);
    setTimeout(() => {
      setClickedMinus(false);
    }, 150);
  }
  function clickPlus() {
    setClickedPlus(true);
    setTimeout(() => {
      setClickedPlus(false);
    }, 150);
  }

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
          <p
            className={`minus-button ${
              clickedMinus ? "clickedMinusClass" : ""
            }`}
            onClick={() => {
              props.minus && props.minus(props.id);
              clickMinus();
            }}
          >
            -
          </p>
          <p>{props.quantity}</p>
          <p
            className={`plus-button ${clickedPlus ? "clickedPlusClass" : ""}`}
            onClick={() => {
              props.plus && props.plus(props.id);
              clickPlus();
            }}
          >
            +
          </p>
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
