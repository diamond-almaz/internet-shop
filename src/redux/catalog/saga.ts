import { takeEvery, put, fork, all } from "redux-saga/effects";
import { getProductByDealer, getProducts } from "../../api";
import { IDealer, IProductItem } from "../../types";
import { RECEIVE_PRODUCTS, RECEIVE_PRODUCTS_BY_DEALER } from "../actions";
import { setProducts } from "./actions";

function* workReceiveProducts() {
  const data: IProductItem[] = yield getProducts();

  yield put(setProducts(data));
}

function* watchReceiveProducts() {
  yield takeEvery(RECEIVE_PRODUCTS, workReceiveProducts);
}

function* workReceiveProductsByDealer({
  IDs,
}: {
  type: typeof RECEIVE_PRODUCTS_BY_DEALER;
  IDs: string[];
}) {
  const data: IProductItem[] = yield getProductByDealer(IDs);

  yield put(setProducts(data));
}

function* watchReceiveProductsByDealer() {
  yield takeEvery<{ type: typeof RECEIVE_PRODUCTS_BY_DEALER; IDs: string[] }>(
    RECEIVE_PRODUCTS_BY_DEALER,
    workReceiveProductsByDealer
  );
}

export function* catalogSaga() {
  yield all([fork(watchReceiveProducts), fork(watchReceiveProductsByDealer)]);
}
