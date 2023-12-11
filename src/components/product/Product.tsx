import "./styles.css";
import { prod } from "../../App";
import { useContext } from "react";
import cartImg from "../../images/carrinho-de-compras.png";
import MyContext from "../context/Context";
import { Link } from "react-router-dom"
import { useState } from "react";

export const Product = (props: prod) => {
  const { buy, setDetailID } = useContext(MyContext);
  const [clickedProd, setClickedProd] = useState(false);



function prodClicked(){
  console.log("test")
  setClickedProd(true);
  setTimeout(() => {
    setClickedProd(false);
  }, 150);
}


  return (
    <div className="product" id={props.id.toString()}>
      <Link to="/Details" className="image-box" onClick={() => setDetailID(props.id)}>
        <img src={props.image}></img>
      </Link>
      <img  
      className={`cartIcon ${clickedProd ? "clickedProdClass" : ""}`}   
      src={cartImg} onClick={()=> {buy(props.id); prodClicked()}} />
      <Link to="/Details" className="sub-descrip" onClick={() => setDetailID(props.id)}>
        <p className="prod-title">{props.title}</p>
        <p className="prod-price">$ {props.price}</p>
      </Link>
    </div>
  );
};

