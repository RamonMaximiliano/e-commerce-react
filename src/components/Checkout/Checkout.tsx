import "./styles.css";
import checkoutimage from "../../images/Thanks.png";
import { useEffect } from "react";

export const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
       <div className="main-checkout">
          <img src={checkoutimage}></img>
        </div>
     
  );
};
