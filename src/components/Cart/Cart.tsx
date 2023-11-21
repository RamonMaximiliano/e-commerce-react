import "./styles.css";
import { prod } from "../../App";
import MyContext from "../context/Context";
import { useContext, useEffect, useState } from "react";
import { CartItem } from "../CartItem/CartItem";

export type quantityItem = {
  id: number,
  title: string,
  price: number,
  quantity?:1,
  totalPrice?:number,
  description?: string,
  category?: string,
  plus?:any,
  minus?:any,
  image?: string,
  rating?: {
    rate: number,
    count: number,
  },
  delete?:(e: any) => void,
};

export const Cart = () => {
  const { singleArray, productsList, setSingleArray } = useContext(MyContext);
  const [cartList, setCartList] = useState<quantityItem[]>([]);
  const [totalCart, setTotalCart] = useState<number>(0);

  useEffect(() => {
    setCartList(
      productsList
        .filter((item: prod) => singleArray.includes(item.id))
        .map((item: prod) => ({
          ...item,
          quantity: 1, // Set default value to 1
        }))
    );
  }, [singleArray]);

useEffect(()=>{
  setTotalCart(
    cartList.reduce((tot, item) => {
      return tot + (item.price || 0) * (item.quantity || 0);
    }, 0));
}, [cartList]
);


function plus(e: number) {
  console.log(`plus ${e}`);
  let plusList = cartList.map((item) => {
    if (item.id === e) {
      // Check if 'quantity' is defined before incrementing
      if (item.quantity !== undefined) {
        item.quantity ++;
      }
    }
    return item; // Return the modified item
  });
  
  // Update cartList with the modified items
  setCartList(plusList)
}

function minus(e: number) {
  console.log(`minus ${e}`);
  let minusList = cartList.map((item) => {
    if (item.id === e) {
      // Check if 'quantity' is defined before incrementing
      if (item.quantity !== undefined && item.quantity>1) {
        item.quantity --;
      }
    }
    return item; // Return the modified item
  });
  
  // Update cartList with the modified items
    setCartList(minusList)
}

function deleteProd(e:number){
  let updatedCartList = singleArray.filter((item:number)=>{
    return item != e;
  })
  setSingleArray(updatedCartList);
}

  return (
    <div>
      <div className="cartTitle">
        <p>Cart</p>
      </div>
      <div className="prodInfo-title">
        <div className="prodInfo-column">
          <p className="prod-prop">PRODUCTS</p>
        </div>
        <div className="prodInfo-column">
          <p className="prod-prop">PRODUCT NAME</p>
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

      {cartList.map((item) => ( <CartItem id={item.id} title={item.title} quantity={item.quantity} price={item.price} image={item.image} delete={deleteProd} plus={plus} minus={minus}/>))}

      <div className="cartTotal">
        <p>Total: </p>
        <p>$ {totalCart.toFixed(2)}</p>
      </div>
    </div>
  );
};

