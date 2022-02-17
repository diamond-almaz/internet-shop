import { IBusketItem, IBusketPage } from "../../types";
import {
  ADD_PRODUCT,
  CHANGE_COUNT_PRODUCT,
  MINUS_COUNT_PRODUCT,
  PLUS_COUNT_PRODUCT,
  REMOVE_ALL,
  REMOVE_PRODUCT,
} from "./actions";
import { BigNumber } from "bignumber.js";

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
          totalCost: Number(
            new BigNumber(addedProduct.price).multipliedBy(newTotalCount)
          ),
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
        allTotalCost: Number(
          new BigNumber(state.allTotalCost).plus(addedProduct.price)
        ),
      };
    }

    case REMOVE_PRODUCT: {
      const addedProduct: IBusketItem = action.product;

      delete newBasketItems[addedProduct.name];
      return {
        ...state,
        busketItems: newBasketItems,
        allTotalCount: Number(
          new BigNumber(state.allTotalCount).minus(addedProduct.totalCount)
        ),
        allTotalCost: Number(
          new BigNumber(state.allTotalCost).minus(addedProduct.totalCost)
        ),
      };
    }

    case REMOVE_ALL: {
      return initialState;
    }

    case CHANGE_COUNT_PRODUCT: {
      const { name, count } = action;
      const changedProduct = newBasketItems[name];

      const allTotalCount = Number(
        new BigNumber(state.allTotalCount)
          .minus(changedProduct.totalCount)
          .plus(count)
      );
      const allTotalCost = Number(
        new BigNumber(state.allTotalCost)
          .minus(changedProduct.totalCost)
          .plus(new BigNumber(changedProduct.price).multipliedBy(count))
      );

      newBasketItems[name] = {
        ...changedProduct,
        totalCost: Number(
          new BigNumber(count).multipliedBy(changedProduct.price)
        ),
        totalCount: count,
      };

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
