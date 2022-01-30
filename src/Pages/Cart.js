import React from "react";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";
import { StarterAction } from "../Redux/CartReducer/CartActions";
import { connect } from "react-redux";

class Cart extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.props.starter();
  }

  shouldComponentUpdate() {
    if (this.state.products.length === 0) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    this.props.cart.then((data) =>
      this.setState((prevState) => ({
        products: [...prevState.products, ...data],
      }))
    );
  }

  render() {
    return (
      <div className={classes.cart}>
        {this.state.products.length &&
          this.state.products.map((item) => {
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
  starter: () => dispatch(StarterAction()),
});

export default connect(moveStateToProps, mapDispatchToProps)(Cart);
