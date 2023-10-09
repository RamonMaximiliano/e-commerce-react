import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import MyContext from "./components/context";
import { useState, useEffect } from "react";

export type prod = {
  id: number;
  title: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate: string;
    count: number;
  };
};

function App() {
  const [productsList, setProdList] = useState<prod[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(function setProdList(res) {
        return res.json();
      })
      .then((json) => {
        setProdList(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(productsList);

  return (
    <MyContext.Provider value={{ productsList, setProdList }}>
      <div className="App">
        <Header />
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

Contact:
- GitHub, Linkedin, Portfolio

Cart:
- Message if empty
- Products to buy




*/
