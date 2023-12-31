import "./styles.css";
import { useContext, useState, useEffect } from "react";
import MyContext from "../context/Context";
import { prod } from "../../App";
import { useNavigate } from "react-router-dom";

export const Details = () => {
  const { detailID, productsList, buy, itemBought } = useContext(MyContext);
  const navigate = useNavigate();
  const [clickedAdd, setClickedAdd] = useState(false);

  function clickAdd() {
    setClickedAdd(true);
    setTimeout(() => {
      setClickedAdd(false);
    }, 150);
  }

  const handleNavigate = () => {
    navigate("/Products");
  };

  let prodDetail: Array<prod> = productsList.filter((product: prod) => {
    return product.id == detailID;
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-details">
      <div className="prod-detail-title">
        <p>{prodDetail[0].title}</p>
      </div>
      <div className="complete-product">
        <div className="details-image-container">
          <img className="complete-product-image" src={prodDetail[0].image} />
        </div>
        <div className="complete-product-details">
          <div className="prod-detail-category">
            <p>Category: {prodDetail[0].category}</p>
          </div>
          <div className="prod-detail-id">
            <p>Item code: {detailID}</p>
          </div>
          <div className="prod-detail-price">
            <p>Price: $ {prodDetail[0].price}</p>
          </div>
          <div className="prod-detail-rate">
            <p>{prodDetail[0].rating?.rate}</p>
          </div>
          <div className="prod-detail-description">
            <h4>Description:</h4>
            <p>{prodDetail[0].description}</p>
          </div>
          <div className="detail-buttons">
            <button
              className="detail-buttons-prods"
              onClick={() => handleNavigate()}
            >
              Back to Products
            </button>
            <button
              className={`detail-buttons-cart ${
                clickedAdd ? "clickedAddClass" : ""
              }`}
              onClick={() => {
                buy(prodDetail[0].id);
                clickAdd();
                itemBought();
                return undefined;
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
