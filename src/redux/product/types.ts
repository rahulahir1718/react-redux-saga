import { IOptions } from "../../utils/interfaces/options";
import { IProduct } from "../../utils/interfaces/product";
import { ADD_EDIT_PRODUCT_REQUEST, ADD_EDIT_PRODUCT_REQUEST_FAILURE, ADD_EDIT_PRODUCT_REQUEST_SUCCESS, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST_FAILURE, DELETE_PRODUCT_REQUEST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./actionTypes";

export interface IProductPagePayloadValues {
 values: IOptions
}

export interface IProductListSuccessPayload{
  products: IProduct[],
  totalCount: number;
}

export interface IProductListFailurePayload{
  error: string
}

export interface IProductListRequest {
  type: typeof PRODUCT_LIST_REQUEST;
  payload: IProductPagePayloadValues;
}

export interface IProductListSuccess{
  type: typeof PRODUCT_LIST_SUCCESS,
  payload: IProductListSuccessPayload
}

export interface IProductListFailure{
  type: typeof PRODUCT_LIST_FAILURE,
  payload: IProductListFailurePayload
}


export interface IAddEditProductRequestPayload{
  values : IProduct,
  callback : any
}

export interface IAddEditProductRequest{
  type : typeof ADD_EDIT_PRODUCT_REQUEST,
  payload : IAddEditProductRequestPayload
}

export interface IAddEditProductRequestSuccessPayload{
  message: string;
}

export interface IAddEditProductRequestSuccess{
  type : typeof ADD_EDIT_PRODUCT_REQUEST_SUCCESS,
  payload : IAddEditProductRequestSuccessPayload
}

export interface IAddEditProductRequestFailurePayload{
  error: string
}

export interface IAddEditProductRequestFailure{
  type : typeof ADD_EDIT_PRODUCT_REQUEST_FAILURE,
  payload: IAddEditProductRequestFailurePayload
}

export interface IDeleteProductPayload{
  values:{
    id:number
  }
  callback: any
}

export interface IDeleteProductRequest{
  type : typeof DELETE_PRODUCT_REQUEST,
  payload : IDeleteProductPayload
}

export interface IDeleteProductSuccessPayload{
  message : string,
}

export interface IDeleteProductSuccess{
  type: typeof DELETE_PRODUCT_REQUEST_SUCCESS,
  payload : IDeleteProductSuccessPayload
}

export interface IDeleteProductFailurePayload{
  error : string,
}

export interface IDeleteProductFailure{
  type: typeof DELETE_PRODUCT_REQUEST_FAILURE,
  payload : IDeleteProductFailurePayload
}

export type ProductActions =
  | IProductListRequest
  | IProductListSuccess
  | IProductListFailure
  | IAddEditProductRequest
  | IAddEditProductRequestSuccess
  | IAddEditProductRequestFailure
  | IDeleteProductRequest
  | IDeleteProductSuccess
  | IDeleteProductFailure