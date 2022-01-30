import classes from "./CartItem.module.scss";
import planet1 from "../assets/planet-svgrepo-com.svg";
import Input from "../Component/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { QuantityChange } from "../Redux/CartReducer/CartActions";

const CartItem = ({ id, name, description, price, qty, currency }) => {
  const qtyInput = useRef();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(qty);
  const addQty = () => {
    setQuantity((prevState) => prevState + 1);
  };

  useEffect(()=>{
    dispatch(QuantityChange(qtyInput.current.id,qtyInput.current.value));
  },[dispatch,quantity])

  const removeQty = () => {
    setQuantity((prevState) => (prevState === 0 ? prevState : prevState - 1));
  };

  return (
    <div className={classes.cartItem}>
      <div className={classes["cart-image"]}>
        <img src={planet1} alt="product1" />
      </div>
      <div className={classes.productDetails}>
        <h6>{name}</h6>
        <p>{description}</p>
      </div>
      <div className={classes["cart-qty"]}>
        <div onClick={removeQty}>
          <FontAwesomeIcon icon={faMinus} className={classes["cart-minus"]} />
        </div>
        <Input
          className={classes["cart-qty-input"]}
          ref={qtyInput}
          value={quantity}
          id={id}
          readOnly
        />
        <div onClick={addQty}>
          <FontAwesomeIcon icon={faPlus} className={classes["cart-plus"]} />
        </div>
      </div>

      <h3 className={classes.cartprice}>{`${currency}${price * quantity}`}</h3>
    </div>
  );
};

export default CartItem;
