export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCTS_BY_DEALER = "RECEIVE_PRODUCTS_BY_DEALER";
export const receiveProducts = () => ({ type: RECEIVE_PRODUCTS });

export const receiveProductsByDealers = (IDs: string[]) => ({
  type: RECEIVE_PRODUCTS_BY_DEALER,
  IDs,
});
