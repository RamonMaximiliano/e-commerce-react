import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import MyContext from "./components/context/Context";
import { useState, useEffect } from "react";
import { DataBase } from "./API-Data/API-Data";
import { Route, Routes } from "react-router-dom";
import { Products } from "./components/Products/Products";
import { Home } from "./components/Home/Home";
import { Contact } from "./components/Contact/Contact";
import { Details } from "./components/DetailsPage/Details";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
import { Checkoutnope } from "./components/Checkoutnope/Checkoutnope";
import { BuyMessage } from "./components/BuyMessage/BuyMessage";

export type prod = {
  id: number;
  title: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate: number | string;
    count: number;
  };
  delete?: (e: any) => void;
};

export type quantityItem = {
  id: number;
  title?: string;
  price?: number;
  quantity?: number;
  totalPrice?: number;
  description?: string;
  category?: string;
  plus?: any;
  minus?: any;
  image?: string;
  rating?: {
    rate: number | string;
    count: number;
  };
  delete?: (e: any) => void;
};

function App() {
  const [productsList, setProdList] = useState<prod[]>([]);
  const [detailID, setDetailID] = useState<number>(0);
  const [cartList, setCartList] = useState<quantityItem[]>([]);
  const [bought, setBought] = useState(false);

  useEffect(() => {
    setProdList(DataBase);
  }, []);

  const buy = (e: number) => {
    const newItemBought: quantityItem[] = productsList.filter(
      (bought) => bought.id === e
    );
    const itemAlreadyInCart = cartList.find((item) => item.id === e);

    if (!itemAlreadyInCart) {
      const newItemsWithDefaultQuantity = newItemBought.map((item) => ({
        ...item,
        quantity: 1,
      }));

      setCartList((prevCartList) => [
        ...prevCartList,
        ...newItemsWithDefaultQuantity,
      ]);
    }

    itemBought();
  };

  function itemBought() {
    setBought(true);
    setTimeout(() => {
      setBought(false);
    }, 2000);
  }

  return (
    <MyContext.Provider
      value={{
        productsList,
        setProdList,
        detailID,
        setDetailID,
        buy,
        cartList,
        setCartList,
        bought,
        setBought,
        itemBought,
      }}
    >
      <div className="App">
        <BuyMessage />
        <Header />
        <div className="main-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkoutnope" element={<Checkoutnope />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App;

/* 

TO DO:

- Filtrar os produtos by category
- Project component explaining what was done in the project

- Screensize by device:
FALTA:
(cart)
(Buy message)
(Detail screen)
(Thank you screen)
(Sorry screen)




- Review all codes to have a better understanding
- On contact page, provide a complete explanation of the project as well as the technologies used





*/
