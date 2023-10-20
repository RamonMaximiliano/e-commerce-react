import "./styles.css";
import { prod } from "../../App";

export const Product = (props: prod) => {
  return (
    <div className="product" id={props.id.toString()}>
      <div className="image-box">
        <img src={props.image}></img>
      </div>
      <div className="sub-descrip">
        <p className="prod-title">{props.title}</p>
        <p className="prod-price">$ {props.price}</p>
      </div>
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
