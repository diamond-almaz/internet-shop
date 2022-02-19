import { IProductItem } from "../../types";

export const SET_PRODUCTS = "SET_PRODUCTS";

export const LOAD_PRODUCTS_START = "LOAD_PRODUCTS_START";
export const LOAD_PRODUCTS_END = "LOAD_PRODUCTS_END";

export const setProducts = (products: IProductItem[]) => ({
  type: SET_PRODUCTS,
  products,
});

export const loadProductsStart = () => ({ type: LOAD_PRODUCTS_START });
export const loadProductsEnd = () => ({ type: LOAD_PRODUCTS_END });
