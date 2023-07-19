import { call, takeEvery, put, take } from "redux-saga/effects";
import { ADD_TO_CART_REQUEST, CART_REQUEST, DELETE_FROM_CART_REQUEST, EDIT_CART_REQUEST} from "./actionTypes";
import cartService from "./service"
import { addToCartFailure, addToCartSuccess, cartRequestFailure, cartRequestSuccess, deleteFromCartFailure, deleteFromCartSuccess, editCartSuccess, editCartfailure } from "./action";

function* getCartData(action:any) : any{
    try {
        const response = yield call(cartService.getCart, action.payload ? action.payload.values : null);
        const totalCount = parseInt(response.headers.get('X-Total-Count'), 10);

        yield put(
            cartRequestSuccess({
                products : response.data,
                totalCount : totalCount ? totalCount : 0
            })
        );
    } catch (error:any) {
        yield put(
            cartRequestFailure({
                error : error.message
            })
        );
    }
}

function* addToCart(action:any) : any
{
    try {
        const response = yield call(cartService.addToCart, action.payload.product);

        yield put(
            addToCartSuccess({
                message : "Added in cart successfully"
            })
        );

        action.payload.callback();
    } catch (error:any) {
        yield put(
            addToCartFailure({
                error : error.message
            })
        );
    }
}

function* deleteFromCart(action:any) : any{
    try {
        const response = yield call(cartService.deleteFromCart, action.payload.values.id);
        
        yield put(
            deleteFromCartSuccess({
                message : "Deleted from cart successfully"
            })
        );

        action.payload.callback();
    } catch (error:any) {
        yield put(
            deleteFromCartFailure({
                error : error.message
            })
        );
    }
}

function* editCart(action:any) : any{
    try {
        const response = yield call(cartService.editCart, action.payload.values);

        yield put(
            editCartSuccess({
                message : "Cart edited successfully"
            })
        );

        action.payload.callback();
    } catch (error:any) {
        yield put(
            editCartfailure({
                error : error.message
            })
        );
    }
}

function* cartSaga(){
    yield takeEvery(CART_REQUEST, getCartData);
    yield takeEvery(ADD_TO_CART_REQUEST, addToCart);
    yield takeEvery(DELETE_FROM_CART_REQUEST, deleteFromCart);
    yield takeEvery(EDIT_CART_REQUEST, editCart);
}

export default cartSaga;