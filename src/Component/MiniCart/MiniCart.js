import classes from "./MiniCart.module.scss";
import MiniCartItem from "./MiniCartItem";

const MiniCart = (props) => {
  return (
    <div className={props.className}>
      <div className={classes.minicart}>
          <MiniCartItem />
      </div>
      <div className={classes.arrowUp}></div>
    </div>
  );
};

export default MiniCart;
