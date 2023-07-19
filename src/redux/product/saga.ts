import { ADD_EDIT_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./actionTypes";
import {call, takeEvery, put} from 'redux-saga/effects'
import productService from './service'
import { addEditProductFailure, addEditProductSuccess, deleteProductFailure, deleteProductSuccess, productListRequestFailure, productListRequestSuccess } from "./actions";

function* getProductList(action:any) : any{
  
  try
  {
      const response = yield call(productService.getProductList,action.payload.values);
      const totalCount = parseInt(response.headers.get('X-Total-Count'), 10);

      yield put(
        productListRequestSuccess({
          products: response.data,
          totalCount: totalCount ? totalCount : 0
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

function* addProduct(action:any) : any{
  
  try
  {
      const response = yield call(productService.addEditProduct, action.payload.values);
      
      yield put(
        addEditProductSuccess({
          message : "successfully"
        })
      );

      action.payload.callback();
  }
  catch(e:any)
  {
    yield put(
      addEditProductFailure({
        error : e.message
      })
    );
  }
}

function* deleteProduct(action:any) : any{
  try {
      const response = yield call(productService.deleteProduct, action.payload.values.id);

      yield put(
          deleteProductSuccess({
              message : "Product deleted successfully"
          })
      );

      action.payload.callback();
  } catch (error:any) {
      yield put(
          deleteProductFailure({
              error : error.message
          })
      );
  }
}

function* productSaga(){
  yield takeEvery(PRODUCT_LIST_REQUEST, getProductList);
  yield takeEvery(ADD_EDIT_PRODUCT_REQUEST, addProduct);
  yield takeEvery(DELETE_PRODUCT_REQUEST, deleteProduct);
}

export default productSaga;