import { ICatalogPage } from "../../types";
import { LOAD_PRODUCTS_START, SELECT_DEALERS, SET_PRODUCTS } from "./actions";

const initialState: ICatalogPage = {
  products: {},
  loading: false,
  selectedDealers: [],
};

export const catalogPageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      const products = {};

      action.products.forEach((product) => {
        products[product.name] = product;
      });

      return {
        ...state,
        products,
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
        IDs: action.IDs,
      };
    }

    default: {
      return state;
    }
  }
};
