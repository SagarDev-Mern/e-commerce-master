import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getproductList(){
  console.log('get product list function called in saga')
  const response = yield fetch("http://localhost:8000/productList")
  const data = yield response.json()
  console.log("saga response --",data)
  yield put({type:SET_PRODUCT_LIST, data:data})
}

export function* productListSaga(){
  yield takeEvery(PRODUCT_LIST, getproductList)
}