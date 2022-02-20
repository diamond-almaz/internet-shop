import { ICatalogPage, IProductItem } from '../../types';
import {
  ICatalogActions,
  LOAD_PRODUCTS_START,
  SELECT_DEALERS,
  SET_PRODUCTS,
} from './actions';

const initialState: ICatalogPage = {
  products: {},
  loading: false,
  selectedDealers: [],
};

export const catalogPageReducer = (
  state = initialState,
  action: ICatalogActions
) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      const newProducts: { [name: string]: IProductItem } = {};

      action.products.forEach((product) => {
        newProducts[product.name] = product;
      });

      return {
        ...state,
        products: newProducts,
        loading: false,
      };
    }

    case LOAD_PRODUCTS_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case SELECT_DEALERS: {
      return {
        ...state,
        selectedDealers: action.IDs,
      };
    }

    default: {
      return state;
    }
  }
};
