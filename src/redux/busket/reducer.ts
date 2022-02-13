import { IBusketItem, IBusketPage } from "../../types";
import {
  ADD_PRODUCT,
  CHANGE_COUNT_PRODUCT,
  MINUS_COUNT_PRODUCT,
  PLUS_COUNT_PRODUCT,
  REMOVE_ALL,
  REMOVE_PRODUCT,
} from "./actions";

const initialState: IBusketPage = {
  busketItems: {},
  allTotalCount: 0,
  allTotalCost: 0,
};

export const busketPageReducer = (
  state = initialState,
  action: any
): IBusketPage => {
  const newBasketItems: { [name: string]: IBusketItem } = {
    ...state.busketItems,
  };
  switch (action.type) {
    case ADD_PRODUCT: {
      const addedProduct: IBusketItem = action.product;
      if (newBasketItems[addedProduct.name] !== undefined) {
        const newTotalCount = newBasketItems[addedProduct.name].totalCount + 1;
        newBasketItems[addedProduct.name] = {
          ...addedProduct,
          totalCount: newTotalCount,
          totalCost: addedProduct.price * newTotalCount,
        };
      } else {
        newBasketItems[addedProduct.name] = {
          ...addedProduct,
          totalCount: 1,
          totalCost: addedProduct.price,
        };
      }

      return {
        ...state,
        busketItems: newBasketItems,
        allTotalCount: state.allTotalCount + 1,
        allTotalCost: state.allTotalCost + addedProduct.price,
      };
    }

    case REMOVE_PRODUCT: {
      const addedProduct: IBusketItem = action.product;

      delete newBasketItems[addedProduct.name];
      return {
        ...state,
        busketItems: newBasketItems,
        allTotalCount: state.allTotalCount - addedProduct.totalCount,
        allTotalCost: state.allTotalCost - addedProduct.totalCost,
      };
    }

    case REMOVE_ALL: {
      return initialState;
    }

    case CHANGE_COUNT_PRODUCT: {
      const { name, count } = action;

      const changedProduct = newBasketItems[name];

      let allTotalCount = 0;
      let allTotalCost = 0;

      if (changedProduct.totalCount < count) {
        allTotalCount = state.allTotalCount - changedProduct.totalCount + count;
        allTotalCost =
          state.allTotalCost -
          changedProduct.totalCost +
          changedProduct.price * count;
        changedProduct.totalCount = count;
        changedProduct.totalCost =
          changedProduct.price * changedProduct.totalCount;
      } else {
        allTotalCount = state.allTotalCount - count;
        allTotalCost = state.allTotalCost - changedProduct.price * count;
        changedProduct.totalCount -= count;
        changedProduct.totalCost = changedProduct.price * count;
      }

      return {
        ...state,
        busketItems: newBasketItems,
        allTotalCount,
        allTotalCost,
      };
    }

    // case MINUS_COUNT_PRODUCT: {
    //   const { name } = action;

    //   const changedProduct = newBasketItems[name];

    //   changedProduct.totalCount -= 1;
    //   changedProduct.totalCost -= changedProduct.price;

    //   return {
    //     ...state,
    //     busketItems: newBasketItems,
    //     allTotalCount: state.allTotalCount - 1,
    //     allTotalCost: state.allTotalCost - changedProduct.price,
    //   }
    // }

    // case PLUS_COUNT_PRODUCT: {
    //   const { name } = action;

    //   const changedProduct = newBasketItems[name];

    //   changedProduct.totalCount += 1;
    //   changedProduct.totalCost += changedProduct.price;

    //   return {
    //     ...state,
    //     busketItems: newBasketItems,
    //     allTotalCount: state.allTotalCount + 1,
    //     allTotalCost: state.allTotalCost + changedProduct.price,
    //   }
    // }

    default: {
      return state;
    }
  }
};
