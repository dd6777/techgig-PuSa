import React from "react";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import { StarterActionThunk } from "../Redux/CartReducer/CartActions";
import { connect } from "react-redux";

class Cart extends React.Component {
  componentDidMount() {
    this.props.starterThunk();
  }

  render() {
    return (
      <div className={classes.cart}>
        {this.props.cart.length &&
          this.props.cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.title}
                description={item.desc}
                price={item.price}
                currency={item.currency}
                qty={item.quantity}
              />
            );
          })}
      </div>
    );
  }
}

const moveStateToProps = (state) => ({
  cart: state.cart.products,
});

const mapDispatchToProps = (dispatch) => ({
  starterThunk: () => dispatch(StarterActionThunk()),
});

export default connect(moveStateToProps, mapDispatchToProps)(Cart);
