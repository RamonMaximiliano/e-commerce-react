import "./styles.css";
import nope from "../../images/Nope.jpg";

export const Checkoutnope = () => {
  return (
    <div className="main-checkout-nope">
      <div className="message-div">
        <h3>Sorry!</h3>
        <p>You need to buy something!</p>
      </div>
      <img src={nope}></img>
    </div>
  );
};
