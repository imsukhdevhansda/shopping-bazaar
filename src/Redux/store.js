import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as ProductsReducer } from "./ProductsReducer/reducer";

const rootReducer = combineReducers({ AuthReducer, ProductsReducer });
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
