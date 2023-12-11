import cartImg from "../../images/carrinho-de-compras.png";
import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [clicked, setClicked] = useState(false);

  function clickedCart() {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 200);
  }

  return (
    <div className="main-header">
      <ul className="menu-list">
        <li>
          <Link to="/" className="LinkTag">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Products" className="LinkTag">
            Products
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="LinkTag">
            Contact
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/Cart" onClick={clickedCart}>
          <div className={`cart-div ${clicked? "clickedClass":""}`} onClick={clickedCart}>
            <img src={cartImg} onClick={clickedCart} className={`cartImage ${clicked? "clickedClass2":""}`} />
          </div>
        </Link>
      </div>
    </div>
  );
};
