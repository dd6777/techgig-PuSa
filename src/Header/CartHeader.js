import classes from "./CartHeader.module.scss";
import cart from "../assets/shopping-cart-svgrepo-com.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import MiniCart from "../Component/MiniCart/MiniCart";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCart } from "../Redux/CartReducer/CartActions";

const CartHeader = () => {
  const dispatch = useDispatch();
  const currState = useSelector((state) => state.cart.cartProducts);
  const toggleState = useSelector((state) => state.cart.toggle);

  const toggleCart = () => {
    dispatch(ToggleCart());
  };
  return (
    <div className={classes["cart-nav"]}>
      <div className={classes.cart} onClick={toggleCart}>
        <div className={classes.cartDetails}>
          <p>
            {currState.length
              ? `${currState[0].currency} ${currState.reduce((a, b) => {
                  return parseInt(a) + parseInt(b.price * b.quantity);
                }, 0)}`
              : "$0"}
          </p>
          <p>
            {currState.length
              ? currState.reduce((a, b) => {
                  return parseInt(a) + parseInt(b.quantity);
                }, 0)
              : "0"}{" "}
            items <FontAwesomeIcon icon={faCaretDown} />
          </p>
        </div>
        <img src={cart} alt="cart" className={classes["cart-img"]} />
      </div>
      {toggleState && <MiniCart className={classes.sublist} cart={currState} />}
    </div>
  );
};

export default CartHeader;
