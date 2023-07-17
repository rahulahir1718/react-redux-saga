import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./actionTypes";
import {call, takeEvery, put} from 'redux-saga/effects'
import productService from './service'
import { productListRequestFailure, productListRequestSuccess } from "./actions";

function* getProductList(action:any) : any{
  
  try
  {
      const response = yield call(productService.getProductList,action.payload.values);
      
      yield put(
        productListRequestSuccess({
          products: response
        })
      );
  }
  catch(e:any)
  {
    yield put(
      productListRequestFailure({
        error : e.message
      })
    );
  }
  
}

function* productSaga(){
  yield takeEvery(PRODUCT_LIST_REQUEST, getProductList);
}

export default productSaga;