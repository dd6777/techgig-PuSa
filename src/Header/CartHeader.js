import classes from "./CartHeader.module.scss";
import cart from "../assets/shopping-cart-svgrepo-com.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import MiniCart from "../Component/MiniCart/MiniCart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCart } from "../Redux/CartReducer/CartActions";
const INITIAL_STATE = {
  cart: [],
};

const CartHeader = () => {
  const dispatch = useDispatch();
  const [cartState, setCartState] = useState(INITIAL_STATE);
  const currState = useSelector((state) => state.cart.products);
  const toggleState = useSelector((state) => state.cart.toggle);

  useEffect(() => {
    const asyncState = async () => {
      const response = await currState;
      setCartState((prevState) => {
        const newState = { ...prevState, cart: [...response] };
        return newState;
      });
    };
    asyncState();
  }, [currState]);

  const toggleCart = () => {
    dispatch(ToggleCart());
  };

  return (
    <div className={classes["cart-nav"]} onClick={toggleCart}>
      <div className={classes.cart}>
        <div className={classes.cartDetails}>
          <p>
            {cartState.cart.length
              ? `${cartState.cart[0].currency} ${cartState.cart.reduce(
                  (a, b) => {
                    return parseInt(a) + parseInt(b.price * b.quantity);
                  },
                  0
                )}`
              : "$0"}
          </p>
          <p>
            {cartState.cart.length
              ? cartState.cart.reduce((a, b) => {
                  return parseInt(a) + parseInt(b.quantity);
                }, 0)
              : "0"}{" "}
            items <FontAwesomeIcon icon={faCaretDown} />
          </p>
        </div>
        <img src={cart} alt="cart" className={classes["cart-img"]} />
      </div>
      {toggleState && (
        <MiniCart className={classes.sublist} cart={cartState.cart} />
      )}
    </div>
  );
};

export default CartHeader;
