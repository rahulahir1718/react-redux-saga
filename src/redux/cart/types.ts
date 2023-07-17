import { ICartProduct} from "../../utils/interfaces/cart-product";
import { ADD_TO_CART_REQUEST, ADD_TO_CART_REQUEST_FAILURE, ADD_TO_CART_REQUEST_SUCCESS, CART_REQUEST, CART_REQUEST_FAILURE, CART_REQUEST_SUCCESS, DELETE_FROM_CART_REQUEST, DELETE_FROM_CART_REQUEST_FAILURE, DELETE_FROM_CART_REQUEST_SUCCESS, EDIT_CART_REQUEST, EDIT_CART_REQUEST_FAILURE, EDIT_CART_REQUEST_SUCCESS } from "./actionTypes";

export interface ICartRequestSuccessPayload{
  products: ICartProduct[]
}

export interface ICartRequestFailurePayload{
  error: string
}

export interface IAddToCartPayload{
  product : ICartProduct,
  callback: any
}

export interface IAddTocartRequest{
  type : typeof ADD_TO_CART_REQUEST,
  payload : IAddToCartPayload
}

export interface IAddToCartSuccessPayload{
  message : string,
}

export interface IAddToCartSuccess{
  type: typeof ADD_TO_CART_REQUEST_SUCCESS,
  payload : IAddToCartSuccessPayload
}

export interface IAddToCartFailurePayload{
  error : string,
}

export interface IAddToCartFailure{
  type: typeof ADD_TO_CART_REQUEST_FAILURE,
  payload : IAddToCartFailurePayload
}

export interface ICartRequest {
  type: typeof CART_REQUEST;
}

export interface ICartRequestSuccess{
  type: typeof CART_REQUEST_SUCCESS,
  payload: ICartRequestSuccessPayload
}

export interface ICartrequestFailure{
  type: typeof CART_REQUEST_FAILURE,
  payload: ICartRequestFailurePayload
}

export interface IDeleteFromCartPayload{
  values:{
    id:number
  }
  callback: any
}

export interface IDeleteFromcartRequest{
  type : typeof DELETE_FROM_CART_REQUEST,
  payload : IDeleteFromCartPayload
}

export interface IDeleteFromCartSuccessPayload{
  message : string,
}

export interface IDeleteFromCartSuccess{
  type: typeof DELETE_FROM_CART_REQUEST_SUCCESS,
  payload : IDeleteFromCartSuccessPayload
}

export interface IDeleteFromCartFailurePayload{
  error : string,
}

export interface IDeleteFromCartFailure{
  type: typeof DELETE_FROM_CART_REQUEST_FAILURE,
  payload : IDeleteFromCartFailurePayload
}

export interface IEditCartPayload{
  values: ICartProduct
  callback: any
}

export interface IEditCartRequest{
  type : typeof EDIT_CART_REQUEST,
  payload : IEditCartPayload
}

export interface IEditCartSuccessPayload{
  message : string,
}

export interface IEditCartSuccess{
  type: typeof EDIT_CART_REQUEST_SUCCESS,
  payload : IEditCartSuccessPayload
}

export interface IEditCartFailurePayload{
  error : string,
}

export interface IEditCartFailure{
  type: typeof EDIT_CART_REQUEST_FAILURE,
  payload : IEditCartFailurePayload
}

export type CartActions =
  | ICartRequest
  | ICartRequestSuccess
  | ICartrequestFailure
  | IAddTocartRequest
  | IAddToCartSuccess
  | IAddToCartFailure
  | IDeleteFromcartRequest
  | IDeleteFromCartSuccess
  | IDeleteFromCartFailure
  | IEditCartRequest
  | IEditCartSuccess
  | IEditCartFailure