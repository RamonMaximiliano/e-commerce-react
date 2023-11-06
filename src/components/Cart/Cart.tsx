import "./styles.css";
import { prod } from "../../App";
import trash from "../../images/trash.png"
import MyContext from "../context/Context";
import { useContext, useEffect, useState } from "react";

let cartProd: prod = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};

export type cartItem = {
  id: number;
  title: string;
  price?: number;
  quantity?: number;
  total?: number;
}

export const Cart = () => {
  const { singleArray, productsList} = useContext(MyContext);
  const [cartList, setCartList] = useState<prod[]>([]); 

  useEffect(()=>{
    setCartList(            
      productsList.filter((item:prod)=>{
        return singleArray.includes(item.id)    
      })
    )
  },[singleArray]);

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


      <div className="prodInfo">
        <div className="prodInfo-column">
          <img className="prod-prop-image" src={cartProd.image}/>
        </div>
        <div className="prodInfo-column">
          <p>{cartProd.title}</p>
        </div>
        <div className="prodInfo-column">
          <p>$ {cartProd.price}</p>
        </div>
        <div className="prodInfo-column">
          <p>132465</p>
        </div>
        <div className="prodInfo-column">
          <img className="prod-prop-trash" src={trash}/>
        </div>
        <div className="prodInfo-column">
          <p>Item total:</p>
        </div>
      </div>





      <div className="prodInfo">
        <div className="prodInfo-column">
          <img className="prod-prop-image" src={cartProd.image}/>
        </div>
        <div className="prodInfo-column">
          <p>{cartProd.price}</p>
        </div>
        <div className="prodInfo-column">
          <p>$ {cartProd.price}</p>
        </div>
        <div className="prodInfo-column">
          <p>132465</p>
        </div>
        <div className="prodInfo-column">
          <img className="prod-prop-trash" src={trash}/>
        </div>
        <div className="prodInfo-column">
          <p>Item total:</p>
        </div>
      </div>





    </div>
  );
};


/* 
<p className="new-button">
  <Link to="/page1" element={<New />} className="new-button-link">New contact</Link>
</p>
{
  newContList.map(contact => <Person name={contact.name} job={contact.job} picture={contact.pic} id={contact.id} />)
}
</> */