import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className={classes.cart}>
      <CartItem />
      <CartItem />
    </div>
  );
};

export default Cart;
