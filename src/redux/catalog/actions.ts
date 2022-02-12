import { IProductItem } from "../../types";

export const SET_PRODUCTS = "SET_PRODUCTS";

export const setProducts = (products: IProductItem[]) => ({
  type: SET_PRODUCTS,
  products,
});
