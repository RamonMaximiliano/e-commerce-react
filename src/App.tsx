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


export type prod = {
  id: number;
  title: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate: number;
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
    rate: number;
    count: number;
  };
  delete?: (e: any) => void;
};

function App() {
  const [productsList, setProdList] = useState<prod[]>([]);
  const [detailID, setDetailID] = useState<number>(0);
  const [cartList, setCartList] = useState<quantityItem[]>([]);

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
  };

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
      }}
    >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutnope" element={<Checkoutnope />} />
        </Routes>
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App;

/* 


----------------------------------------------------------------------------------------------

TO DO:

- Filtrar os produtos by category
- Display messages when adding items to cart
- Screensize by device 
- Main products Carrosel page 
- Rapid color change when clicking buttons
- Review all codes to have a better understanding


https://www.youtube.com/watch?v=SK9AlIbexOE&ab_channel=MonsterlessonsAcademy

https://www.youtube.com/watch?v=CMg_1KxpM_4&ab_channel=DeveloperGeorge



CAROUSEL:

- Arrow buttons
- Dots buttons
- Change every couple of seconds
- Adaptate to screensize



----------------------------------------------------------------------------------------------




Checking

REACT E-COMMERCE:
https://www.youtube.com/watch?v=-edmQKcOW8s&list=PLnHJACx3NwAe5XQDk9xLgym7FF8Q4FYW7&index=8&ab_channel=CodingAddict

CAROUSEL:

https://www.youtube.com/watch?v=SK9AlIbexOE&ab_channel=MonsterlessonsAcademy

https://www.youtube.com/watch?v=CMg_1KxpM_4&ab_channel=DeveloperGeorge


Why does the file .jpg is interpreted by typescript as type string?
here for example when I put the mouse over image1 it appears as type string

import "./styles.css";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import image1 from "../../images/Carrousel/image1.jpg";
import image2 from "../../images/Carrousel/image2.jpg";
import image3 from "../../images/Carrousel/image3.jpg";

type carousel = {
  id: number;
  image: string;
};





*/
