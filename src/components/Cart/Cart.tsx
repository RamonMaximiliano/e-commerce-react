import "./styles.css";
import MyContext from "../context/Context";
import { useContext, useEffect, useState } from "react";
import { CartItem } from "../CartItem/CartItem";
import { quantityItem } from "../../App";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartList, setCartList } = useContext(MyContext);
  const [totalCart, setTotalCart] = useState<number>(0);
  const navigateCheckout = useNavigate();
  const [clickedClear, setClickedClear] = useState(false);

  function clickClear() {
    setClickedClear(true);
    setTimeout(() => {
      setClickedClear(false);
    }, 150);
  }

  const handleCheckoutNav = () => {
    if (cartList.length != 0) {
      navigateCheckout("/checkout");
    } else {
      navigateCheckout("/checkoutnope");
    }
    setCartList([]);
  };

  useEffect(() => {
    setTotalCart(
      cartList.reduce((tot: number, item: quantityItem) => {
        return tot + (item.price || 0) * (item.quantity || 0);
      }, 0)
    );
  }, [cartList]);

  function plus(e: number) {
    let plusList = cartList.map((item: quantityItem) => {
      if (item.id === e) {
        if (item.quantity !== undefined) {
          item.quantity++;
        }
      }
      return item;
    });
    setCartList(plusList);
  }

  function minus(e: number) {
    let minusList = cartList.map((item: quantityItem) => {
      if (item.id === e) {
        if (item.quantity !== undefined && item.quantity > 1) {
          item.quantity--;
        }
      }
      return item; 
    });

    setCartList(minusList);
  }

  function deleteProd(e: number) {
    const undeletedList = cartList.filter((undeleted: quantityItem) => {
      return undeleted.id != e;
    });
    setCartList(undeletedList);
  }

  function clearList() {
    setCartList([]);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {cartList.map((item: quantityItem) => (
        <CartItem
          id={item.id}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
          image={item.image}
          delete={deleteProd}
          plus={plus}
          minus={minus}
        />
      ))}

      <div className="cart-container">
        <div className="cart-checkout">
          <div className="cartTotal">
            <p>Total: </p>
            <p>$ {totalCart.toFixed(2)}</p>
          </div>

          <div className="cart-buttons">
            <button
              className={`cart-buttons-clear ${
                clickedClear ? "clickedClearClass" : ""
              }`}
              onClick={() => {
                clickClear();
                clearList();
                return undefined;
              }}
            >
              Clear Cart
            </button>
            <button
              className="cart-buttons-checkout"
              onClick={handleCheckoutNav}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
