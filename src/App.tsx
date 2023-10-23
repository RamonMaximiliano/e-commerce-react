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
};

function App() {
  const [productsList, setProdList] = useState<prod[]>([]);

  useEffect(()=>{
    setProdList(DataBase)
  },[]);

  const buy = () =>  {
    console.log("hello there!")
  }


  return (
    <MyContext.Provider value={{ productsList, setProdList, buy }}>
      <div className="App">
        <Header />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/products" element={<Products />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App;

/* 

Checking

REACT E-COMMERCE:

https://www.youtube.com/watch?v=-edmQKcOW8s&list=PLnHJACx3NwAe5XQDk9xLgym7FF8Q4FYW7&index=8&ab_channel=CodingAddict

https://www.youtube.com/watch?v=sfmL6bGbiN8&ab_channel=freeCodeCamp.org
https://fakestoreapi.com/
https://fakestoreapi.com/products


TO DO:

- Check the API details
- Main products page 
- Login / Register user page 
- If tries to buy without logging get error 
- Icons
- Footer 

PAGES:

Home:
- Carrosel 
- Login 

Products:
- List of products
- Add a filter by Category



Contact:
- GitHub, Linkedin, Portfolio

Cart:
- Message if empty
- Products to buy




*/
