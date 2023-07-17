import { ADD_TO_CART_REQUEST_FAILURE, ADD_TO_CART_REQUEST_SUCCESS, CART_REQUEST_FAILURE, CART_REQUEST_SUCCESS, DELETE_FROM_CART_REQUEST_FAILURE, DELETE_FROM_CART_REQUEST_SUCCESS, EDIT_CART_REQUEST_FAILURE, EDIT_CART_REQUEST_SUCCESS } from "./actionTypes";
import { CartActions } from "./types";

const initialState = {
    cartProducts : [],
    totalProducts : 0
  }

const reducer = (state = initialState, action : CartActions) => {
    if(action.type == CART_REQUEST_SUCCESS){
        return {...state, cartProducts: action.payload.products, totalProducts : action.payload.products.length}
    }

    if(action.type == CART_REQUEST_FAILURE){
        return state;
    }

    if(action.type == ADD_TO_CART_REQUEST_SUCCESS){
        return state;
    }

    if(action.type == ADD_TO_CART_REQUEST_FAILURE){
        return state;
    }

    if(action.type == DELETE_FROM_CART_REQUEST_SUCCESS){
        return state;
    }

    if(action.type == DELETE_FROM_CART_REQUEST_FAILURE){
        return state;
    }

    if(action.type == EDIT_CART_REQUEST_SUCCESS){
        return state;
    }

    if(action.type == EDIT_CART_REQUEST_FAILURE){
        return state;
    }

    return state;
};

export default reducer