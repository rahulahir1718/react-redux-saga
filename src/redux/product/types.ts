import { IProduct } from "../../utils/interfaces/product";
import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./actionTypes";

export interface IProductListPayload {
  values: IProductPagePayloadValues;
}


export interface IProductPagePayloadValues {
  name?: string;
}

export interface IProductListSuccessPayload{
  products: IProduct[]
}

export interface IProductListFailurePayload{
  error: string
}

export interface IProductListRequest {
  type: typeof PRODUCT_LIST_REQUEST;
  payload: IProductListPayload;
}

export interface IProductListSuccess{
  type: typeof PRODUCT_LIST_SUCCESS,
  payload: IProductListSuccessPayload
}

export interface IProductListFailure{
  type: typeof PRODUCT_LIST_FAILURE,
  payload: IProductListFailurePayload
}

export type ProductActions =
  | IProductListRequest
  | IProductListSuccess
  | IProductListFailure