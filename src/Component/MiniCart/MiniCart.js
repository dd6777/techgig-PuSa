import classes from "./MiniCart.module.scss";
import MiniCartItem from "./MiniCartItem";

const MiniCart = (props) => {
  return (
    <div className={props.className}>
      <div className={classes.minicart}>
        {props.cart.length ? props.cart.map((item) => {
          return (
            <MiniCartItem
              key={item.id}
              id={item.id}
              name={item.title}
              price={item.price}
              quantity={item.quantity}
              currency={item.currency}
            />
          );
        }):<p style={{}}>No Items Found</p>}
      </div>
      <div className={classes.arrowUp}></div>
    </div>
  );
};

export default MiniCart;
