import { ADD_EDIT_PRODUCT_REQUEST, ADD_EDIT_PRODUCT_REQUEST_FAILURE, ADD_EDIT_PRODUCT_REQUEST_SUCCESS, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST_FAILURE, DELETE_PRODUCT_REQUEST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./actionTypes";
import { IAddEditProductRequest, IAddEditProductRequestFailure, IAddEditProductRequestFailurePayload, IAddEditProductRequestPayload, IAddEditProductRequestSuccess, IAddEditProductRequestSuccessPayload, IDeleteProductFailure, IDeleteProductFailurePayload, IDeleteProductPayload, IDeleteProductRequest, IDeleteProductSuccess, IDeleteProductSuccessPayload, IProductListFailure, IProductListFailurePayload, IProductListRequest, IProductListSuccess, IProductListSuccessPayload, IProductPagePayloadValues } from "./types";

export const productListRequest = ( payload: IProductPagePayloadValues ) : IProductListRequest => ({
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

export const addEditProductRequest = ( payload: IAddEditProductRequestPayload ) : IAddEditProductRequest => ({
  type: ADD_EDIT_PRODUCT_REQUEST,
  payload,
});

export const addEditProductSuccess = ( payload: IAddEditProductRequestSuccessPayload ) : IAddEditProductRequestSuccess => ({
  type: ADD_EDIT_PRODUCT_REQUEST_SUCCESS,
  payload,
});

export const addEditProductFailure = ( payload: IAddEditProductRequestFailurePayload ) : IAddEditProductRequestFailure => ({
  type: ADD_EDIT_PRODUCT_REQUEST_FAILURE,
  payload,
});

export const deleteProduct = (payload: IDeleteProductPayload) : IDeleteProductRequest => {
  return {
      type: DELETE_PRODUCT_REQUEST,
      payload: payload
  };
}

export const deleteProductSuccess = (payload: IDeleteProductSuccessPayload) : IDeleteProductSuccess => {
  return {
      type: DELETE_PRODUCT_REQUEST_SUCCESS,
      payload:payload
  };
}

export const deleteProductFailure = (payload: IDeleteProductFailurePayload) : IDeleteProductFailure => {
  return {
      type: DELETE_PRODUCT_REQUEST_FAILURE,
      payload:payload
  };
}