import { takeEvery, put, fork, all } from "redux-saga/effects";
import { getProducts } from "../../api";
import { IProductItem } from "../../types";
import { RECEIVE_PRODUCTS } from "../actions";
import { setProducts } from "./actions";

function* workReceiveProducts() {
  const data: IProductItem[] = yield getProducts();

  console.log(data);

  yield put(setProducts(data));
}

function* watchReceiveProducts() {
  yield takeEvery(RECEIVE_PRODUCTS, workReceiveProducts);
}

export function* catalogSaga() {
  yield all([fork(watchReceiveProducts)]);
}
