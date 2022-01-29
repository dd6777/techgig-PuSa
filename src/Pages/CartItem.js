import classes from "./CartItem.module.scss";
import planet1 from "../assets/planet-svgrepo-com.svg";
import Input from "../Component/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CartItem = () => {
  return (
    <div className={classes.cartItem}>
      <div className={classes["cart-image"]}>
        <img src={planet1} alt="product1" />
      </div>
      <div className={classes.productDetails}>
        <h6>Product1</h6>
        <p>Product Description</p>
      </div>
      <div className={classes["cart-qty"]}>
        <FontAwesomeIcon icon={faMinus} className={classes["cart-minus"]} />
        <Input className={classes["cart-qty-input"]} defaultValue="1" />
        <FontAwesomeIcon icon={faPlus} className={classes["cart-plus"]} />
      </div>

      <h3 className={classes.cartprice}>$37</h3>
    </div>
  );
};

export default CartItem;
