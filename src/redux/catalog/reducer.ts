import { ICatalogPage } from "../../types";
import { SET_PRODUCTS } from "./actions";

const initialState: ICatalogPage = {
  products: [],
};

export const catalogPageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.products,
      };
    }
    default: {
      return state;
    }
  }
};
