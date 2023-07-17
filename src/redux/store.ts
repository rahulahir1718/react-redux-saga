import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });
  
  sagaMiddleware.run(rootSaga);
  
  export default store;
  