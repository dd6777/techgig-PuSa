import CartTypes from "./CartTypes";
import { qtyChange, removeItem } from "./CartUtils";

const InitialState = {
  products: [],
  cartProducts: [],
  toggle: false,
};

const CartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case CartTypes.STARTER_THUNK:
      return {
        ...state,
        products: action.payload,
        cartProducts: action.payload,
      };
    case CartTypes.QUANTITY_CHANGE:
      return {
        ...state,
        products: qtyChange(state.products, action.payload),
        cartProducts: qtyChange(state.products, action.payload),
      };
    case CartTypes.TOGGLE_CART:
      return { ...state, toggle: !state.toggle };
    case CartTypes.REMOVE_ITEM:
      const updatedState = {
        ...state,
        ...removeItem(state.cartProducts, state.products, action.payload),
      };
      return updatedState;
    default:
      return state;
  }
};

export default CartReducer;
