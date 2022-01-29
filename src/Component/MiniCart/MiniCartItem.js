import classes from "./MiniCartItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MiniCartItem = (props) => {
  return (
    <div className={classes.miniCartItem}>
      <div className={classes.faIcon} >
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className={classes.details}>
        <h5>Product1</h5>
        <p> $37</p>
      </div>
      <div className={classes.qty}>
        <p>Qty 1</p>
      </div>
    </div>
  );
};

export default MiniCartItem;
