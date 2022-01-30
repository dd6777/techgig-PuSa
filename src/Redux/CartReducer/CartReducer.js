import CartTypes from "./CartTypes";
import newStateCreate, { qtyChange,removeItem } from "./CartUtils";

const InitialState = {
  products: [],
  toggle: false,
};

const CartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case CartTypes.STARTER:
      return { ...state, products: newStateCreate() };
    case CartTypes.QUANTITY_CHANGE:
      return { ...state, products: qtyChange(state.products, action.payload) };
    case CartTypes.TOGGLE_CART:
      return { ...state, toggle: !state.toggle };
    case CartTypes.REMOVE_ITEM:
      return {...state, products: removeItem(state.products, action.payload)}
    default:
      return state;
  }
};

export default CartReducer;
