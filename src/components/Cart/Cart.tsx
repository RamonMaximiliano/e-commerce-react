import "./styles.css";
import { prod } from "../../App";
import MyContext from "../context/Context";
import { useContext, useEffect, useState } from "react";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  const { singleArray, productsList,setSingleArray } = useContext(MyContext);
  const [cartList, setCartList] = useState<prod[]>([]);

  useEffect(() => {
    setCartList(
      productsList.filter((item: prod) => {
        return singleArray.includes(item.id);
      })
    );
  }, [singleArray]);


function deleteProd(e:number){
  let updatedCartList = singleArray.filter((item:number)=>{
    return item != e;
  })
  setSingleArray(updatedCartList);
}

  return (
    <div>
      <div className="cartTitle">
        <p>Your cart</p>
      </div>
      <div className="prodInfo-title">
        <div className="prodInfo-column">
          <p className="prod-prop">PRODUCTS</p>
        </div>
        <div className="prodInfo-column">
          <p className="prod-prop">NAME OF PRODUCT</p>
        </div>
        <div className="prodInfo-column">
          <p className="prod-prop">PRICE</p>
        </div>
        <div className="prodInfo-column">
          <p className="prod-prop">QUANTITY</p>
        </div>
        <div className="prodInfo-column">
          <p className="prod-prop">REMOVE</p>
        </div>
        <div className="prodInfo-column">
          <p className="prod-prop">TOTAL</p>
        </div>
      </div>

      {cartList.map((item) => ( <CartItem id={item.id} title={item.title} price={item.price} image={item.image} delete={deleteProd}/>))}

    </div>
  );
};

