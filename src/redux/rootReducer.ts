import { combineReducers } from "@reduxjs/toolkit";
import productReducer from './product/reducer';
import cartReducer from './cart/reducer';

const rootReducer = combineReducers({
    productListState : productReducer,
    cartState : cartReducer
});
  
export default rootReducer;