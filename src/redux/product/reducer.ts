import { ADD_EDIT_PRODUCT_REQUEST, ADD_EDIT_PRODUCT_REQUEST_FAILURE, ADD_EDIT_PRODUCT_REQUEST_SUCCESS, DELETE_PRODUCT_REQUEST_FAILURE, DELETE_PRODUCT_REQUEST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_SUCCESS } from "./actionTypes";
import { ProductActions } from "./types"

const initialState = {
  products : [],
  totalCount : 0,
}

const reducer = (state = initialState, action : ProductActions) => {
  switch(action.type){
    case PRODUCT_LIST_SUCCESS : return {...state, products: action.payload.products, totalCount : action.payload.totalCount};
    case PRODUCT_LIST_FAILURE : return state;
    case ADD_EDIT_PRODUCT_REQUEST_SUCCESS: return state;
    case ADD_EDIT_PRODUCT_REQUEST_FAILURE: return state;
    case DELETE_PRODUCT_REQUEST_SUCCESS : return state;
    case DELETE_PRODUCT_REQUEST_FAILURE: return state;  
    default: return state;
  }
}

export default reducer;