import "./styles.css";
import { useContext, useEffect } from "react";
import { prod } from "../../App";
import { Product } from "../Product/Product";
import MyContext from "../context/Context";

export const Products = () => {
  const { productsList } = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="products-title">Products</div>

      <div className="products-view">
        {productsList.map((item: prod) => (
          <Product
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
};
