import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const middleware =[thunk]

const store = createStore(rootReducer,applyMiddleware(...middleware))
const persistor = persistStore(store)

export {store,persistor}
