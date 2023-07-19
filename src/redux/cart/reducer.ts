import { ADD_TO_CART_REQUEST_FAILURE, ADD_TO_CART_REQUEST_SUCCESS, CART_REQUEST_FAILURE, CART_REQUEST_SUCCESS, DELETE_FROM_CART_REQUEST_FAILURE, DELETE_FROM_CART_REQUEST_SUCCESS, EDIT_CART_REQUEST_FAILURE, EDIT_CART_REQUEST_SUCCESS } from "./actionTypes";
import { CartActions } from "./types";

const initialState = {
    cartProducts : [],
    totalProducts : 0
  }

const reducer = (state = initialState, action : CartActions) => {
    switch(action.type){
        case CART_REQUEST_SUCCESS : return {...state, cartProducts: action.payload.products, totalProducts : action.payload.products.length, totalCount : action.payload.totalCount}
        case CART_REQUEST_FAILURE : return state;
        case ADD_TO_CART_REQUEST_SUCCESS : return state;    
        case ADD_TO_CART_REQUEST_FAILURE : return state; 
        case DELETE_FROM_CART_REQUEST_SUCCESS : return state;
        case DELETE_FROM_CART_REQUEST_FAILURE: return state;  
        case EDIT_CART_REQUEST_SUCCESS: return state; 
        case EDIT_CART_REQUEST_FAILURE: return state;   
        default: return state;               
    }
};

export default reducer