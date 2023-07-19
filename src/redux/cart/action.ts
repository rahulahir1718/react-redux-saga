import { ADD_TO_CART_REQUEST, ADD_TO_CART_REQUEST_FAILURE, ADD_TO_CART_REQUEST_SUCCESS, CART_REQUEST, CART_REQUEST_FAILURE, CART_REQUEST_SUCCESS, DELETE_FROM_CART_REQUEST, DELETE_FROM_CART_REQUEST_FAILURE, DELETE_FROM_CART_REQUEST_SUCCESS, EDIT_CART_REQUEST, EDIT_CART_REQUEST_FAILURE, EDIT_CART_REQUEST_SUCCESS } from "./actionTypes"
import { IAddToCartFailure, IAddToCartFailurePayload, IAddToCartPayload, IAddToCartSuccess, IAddToCartSuccessPayload, IAddTocartRequest, ICartRequest, ICartRequestFailurePayload, ICartRequestPayload, ICartRequestSuccess, ICartRequestSuccessPayload, ICartrequestFailure, IDeleteFromCartFailure, IDeleteFromCartFailurePayload, IDeleteFromCartPayload, IDeleteFromCartSuccess, IDeleteFromCartSuccessPayload, IDeleteFromcartRequest, IEditCartFailure, IEditCartFailurePayload, IEditCartPayload, IEditCartRequest, IEditCartSuccess, IEditCartSuccessPayload } from "./types"

export const cartRequest = (payload?: ICartRequestPayload) : ICartRequest=> {
    return {
        type: CART_REQUEST,
        payload: payload
    }
}

export const cartRequestSuccess = (payload : ICartRequestSuccessPayload) : ICartRequestSuccess => {
    return {
        type: CART_REQUEST_SUCCESS,
        payload: payload
    };
};

export const cartRequestFailure = (payload: ICartRequestFailurePayload) : ICartrequestFailure => {
    return {
        type : CART_REQUEST_FAILURE,
        payload:payload
    };
}

export const addToCart = (payload: IAddToCartPayload) : IAddTocartRequest => {
    return {
        type: ADD_TO_CART_REQUEST,
        payload: payload
    };
}

export const addToCartSuccess = (payload: IAddToCartSuccessPayload) : IAddToCartSuccess => {
    return {
        type: ADD_TO_CART_REQUEST_SUCCESS,
        payload:payload
    };
}

export const addToCartFailure = (payload: IAddToCartFailurePayload) : IAddToCartFailure => {
    return {
        type: ADD_TO_CART_REQUEST_FAILURE,
        payload:payload
    };
}

export const deleteFromCart = (payload: IDeleteFromCartPayload) : IDeleteFromcartRequest => {
    return {
        type: DELETE_FROM_CART_REQUEST,
        payload: payload
    };
}

export const deleteFromCartSuccess = (payload: IDeleteFromCartSuccessPayload) : IDeleteFromCartSuccess => {
    return {
        type: DELETE_FROM_CART_REQUEST_SUCCESS,
        payload:payload
    };
}

export const deleteFromCartFailure = (payload: IDeleteFromCartFailurePayload) : IDeleteFromCartFailure => {
    return {
        type: DELETE_FROM_CART_REQUEST_FAILURE,
        payload:payload
    };
}

export const editCart = (payload: IEditCartPayload) : IEditCartRequest => {
    return {
        type: EDIT_CART_REQUEST,
        payload: payload
    };
}

export const editCartSuccess = (payload: IEditCartSuccessPayload) : IEditCartSuccess => {
    return {
        type: EDIT_CART_REQUEST_SUCCESS,
        payload:payload
    };
}

export const editCartfailure = (payload: IEditCartFailurePayload) : IEditCartFailure => {
    return {
        type: EDIT_CART_REQUEST_FAILURE,
        payload:payload
    };
}