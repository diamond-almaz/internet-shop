import { IAction, IDealer, IProductItem } from '../../types';

export const SET_PRODUCTS = 'SET_PRODUCTS';

export const SELECT_DEALERS = 'SELECT_DEALERS';

export const LOAD_PRODUCTS_START = 'LOAD_PRODUCTS_START';

export const setProducts = (products: IProductItem[]): ISetProductsAction => ({
  type: SET_PRODUCTS,
  products,
});

export const selectDealers = (IDs: IDealer[]): ISelectDealersAction => ({
  type: SELECT_DEALERS,
  IDs,
});

export const loadProductsStart = (): ILoadProductsStartAction => ({
  type: LOAD_PRODUCTS_START,
});

interface ISetProductsAction extends IAction<typeof SET_PRODUCTS> {
  products: IProductItem[];
}

interface ISelectDealersAction extends IAction<typeof SELECT_DEALERS> {
  IDs: IDealer[];
}

type ILoadProductsStartAction = IAction<typeof LOAD_PRODUCTS_START>;

export type ICatalogActions =
  | ISetProductsAction
  | ISelectDealersAction
  | ILoadProductsStartAction;
