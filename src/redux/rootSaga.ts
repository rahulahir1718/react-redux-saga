import { all, fork } from "redux-saga/effects";
import productSaga from "./product/saga";
import cartSaga from "./cart/saga";

export function* rootSaga() {
    yield all([fork(productSaga)]);
    yield all([fork(cartSaga)]);
}