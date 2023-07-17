import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./actionTypes";
import { IProductListFailure, IProductListFailurePayload, IProductListPayload, IProductListRequest, IProductListSuccess, IProductListSuccessPayload } from "./types";

export const productListRequest = ( payload: IProductListPayload ) : IProductListRequest => ({
  type: PRODUCT_LIST_REQUEST,
  payload,
});

export const productListRequestSuccess = ( payload: IProductListSuccessPayload ) : IProductListSuccess => ({
  type: PRODUCT_LIST_SUCCESS,
  payload,
});

export const productListRequestFailure = ( payload: IProductListFailurePayload ) : IProductListFailure => ({
  type: PRODUCT_LIST_FAILURE,
  payload,
});