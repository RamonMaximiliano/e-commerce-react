import "./styles.css";
import MyContext from "../context/Context";
import { useContext } from "react";
import check from "../../images/check.png";

export const BuyMessage = () => {
  const { bought } = useContext(MyContext);

  return (
    <>
      <div className={`item-bought ${bought ? "item-bought-message" : ""}`}>
        <img className="check-icon" src={check}></img>
        <p> Item added!</p>
      </div>
    </>
  );
};
