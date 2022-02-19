import { IDealer, IProductItem } from "../../types";

export const SET_PRODUCTS = "SET_PRODUCTS";

export const SELECT_DEALERS = "SELECT_DEALERS";

export const LOAD_PRODUCTS_START = "LOAD_PRODUCTS_START";

export const setProducts = (products: IProductItem[]) => ({
  type: SET_PRODUCTS,
  products,
});
export const selectDealers = (IDs: IDealer[]) => ({
  type: SELECT_DEALERS,
  IDs,
});

export const loadProductsStart = () => ({ type: LOAD_PRODUCTS_START });
