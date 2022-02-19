import { ICatalogPage } from "../../types";
import {
  LOAD_PRODUCTS_END,
  LOAD_PRODUCTS_START,
  SET_PRODUCTS,
} from "./actions";

const initialState: ICatalogPage = {
  products: [],
  loading: false,
};

export const catalogPageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.products,
      };
    }

    case LOAD_PRODUCTS_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOAD_PRODUCTS_END: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
