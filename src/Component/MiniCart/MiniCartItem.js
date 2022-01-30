import classes from "./MiniCartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../../Redux/CartReducer/CartActions";

const MiniCartItem = ({ id, name, price, quantity, currency }) => {
  const dispatch = useDispatch()
  const removeItemHandler = () => {
    dispatch(RemoveItem(id))
  };
  return (
    <div className={classes.miniCartItem}>
      <div className={classes.faIcon}>
        <FontAwesomeIcon icon={faTimes} onClick={removeItemHandler} />
      </div>
      <div className={classes.details}>
        <h5>{name}</h5>
        <p>{`${currency}${price*quantity}`}</p>
      </div>
      <div className={classes.qty}>
        <p>Qty {quantity}</p>
      </div>
    </div>
  );
};

export default MiniCartItem;
