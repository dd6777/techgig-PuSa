import { combineReducers } from "redux";
import CartReducer from "./CartReducer/CartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key:'root',
  storage,
  whitelist:['cart']
}

const rootReducer = combineReducers({
  cart: CartReducer,
});

export default persistReducer(persistConfig,rootReducer);
