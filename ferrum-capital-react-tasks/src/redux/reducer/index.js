import basket from "./basketReducer";
import products from "./productReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  products,
  basket,
});

export default reducer;
