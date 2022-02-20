import { IAction, IProductItem } from '../../types';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_ALL = 'REMOVE_ALL';
export const CHANGE_COUNT_PRODUCT = 'CHANGE_COUNT_PRODUCT';

export const addProduct = (product: IProductItem): IAddProductAction => ({
  type: ADD_PRODUCT,
  product,
});

export const removeProduct = (product: IProductItem): IRemoveProductAction => ({
  type: REMOVE_PRODUCT,
  product,
});

export const removeAll = (): IRemoveAllAction => ({ type: REMOVE_ALL });

export const changeCountProduct = (
  name: string,
  count: number
): IChangeCountProductAction => ({
  type: CHANGE_COUNT_PRODUCT,
  name,
  count,
});

interface IAddProductAction extends IAction<typeof ADD_PRODUCT> {
  product: IProductItem;
}

interface IRemoveProductAction extends IAction<typeof REMOVE_PRODUCT> {
  product: IProductItem;
}

type IRemoveAllAction = IAction<typeof REMOVE_ALL>;

interface IChangeCountProductAction
  extends IAction<typeof CHANGE_COUNT_PRODUCT> {
  name: string;
  count: number;
}
