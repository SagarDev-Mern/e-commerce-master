import { combineReducers } from "redux";
import cartReducer from "./reducer";
import productListReducer from "./productListReducer";

export default combineReducers({
    cartData : cartReducer,
    productList : productListReducer
})