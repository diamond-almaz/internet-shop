import { IProductItem } from "../../types";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const REMOVE_ALL = "REMOVE_ALL";
export const CHANGE_COUNT_PRODUCT = "CHANGE_COUNT_PRODUCT";

export const addProduct = (product: IProductItem) => ({
  type: ADD_PRODUCT,
  product,
});

export const removeProduct = (product: IProductItem) => ({
  type: REMOVE_PRODUCT,
  product,
});

export const removeAll = () => ({ type: REMOVE_ALL });

export const changeCountProduct = (name: string, count: number) => ({
  type: CHANGE_COUNT_PRODUCT,
  name,
  count,
});
