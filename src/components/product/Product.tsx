import "./styles.css";
import { prod } from "../../App";
import { useContext } from "react";
import cartImg from "../../images/carrinho-de-compras.png";
import MyContext from "../context/Context";
import { Link } from "react-router-dom"

export const Product = (props: prod) => {
  const { buy, setDetailID } = useContext(MyContext);

  return (
    <div className="product" id={props.id.toString()}>
      <Link to="/Details" className="image-box" onClick={() => setDetailID(props.id)}>
        <img src={props.image}></img>
      </Link>
      <img className="cartIcon" src={cartImg} onClick={buy} />
      <Link to="/Details" className="sub-descrip" onClick={() => setDetailID(props.id)}>
        <p className="prod-title">{props.title}</p>
        <p className="prod-price">$ {props.price}</p>
      </Link>
    </div>
  );
};

/* 

id={item.id} 
title={item.title} 
price={item.price} 
description={item.description} 
category={item.category} 
image={item.image} 
key={item.id}

*/
