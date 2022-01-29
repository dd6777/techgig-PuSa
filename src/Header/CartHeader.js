import classes from "./CartHeader.module.scss";
import cart from "../assets/shopping-cart-svgrepo-com.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import MiniCart from "../Component/MiniCart/MiniCart";

const CartHeader = () => {
  return (
    <div className={classes["cart-nav"]}>
      <div className={classes.cart}>
        <div className={classes.cartDetails}>
          <p>$ 78.33</p>
          <p>
            2items <FontAwesomeIcon icon={faCaretDown} />
          </p>
        </div>
        <img src={cart} alt="cart" className={classes["cart-img"]} />
      </div>
      <MiniCart className={classes.sublist} />
    </div>
  );
};

export default CartHeader;
