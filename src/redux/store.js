// import { createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { productListSaga } from "./productSaga";
 

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer)
const store = configureStore({
    reducer: rootReducer,
    middleware: ()=> [sagaMiddleware]
})

sagaMiddleware.run(productListSaga)

export default store;