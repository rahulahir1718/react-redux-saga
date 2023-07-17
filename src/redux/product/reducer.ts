import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_SUCCESS } from "./actionTypes";
import { ProductActions } from "./types"

const initialState = {
  products : [],
}

const reducer = (state = initialState, action : any) => {
  if(action.type == PRODUCT_LIST_SUCCESS){
    return {...state, products: action.payload.products};
  }

  if(action.type == PRODUCT_LIST_FAILURE){
    return state;
  }

  return state;
}

export default reducer;