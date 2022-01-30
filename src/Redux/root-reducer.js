import { combineReducers } from "redux";
import CartReducer from "./CartReducer/CartReducer";

export default combineReducers({
  cart: CartReducer,
});
