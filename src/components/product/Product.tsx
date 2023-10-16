import "./styles.css";
import { prod } from "../../App";

export const Product = (props: prod) => {
  return (
    <div className="product" id={props.id.toString()}>
      <img src={props.image}></img>
      <div className="sub-descrip">
        <p>{props.title}</p>
        <p>{props.price}</p>
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
