import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  removeAll,
  changeCountProduct,
  plusCountProduct,
  minusCountProduct,
} from "../redux/busket/actions";
import { IBusketPage, IStore } from "../types";

export const Busket = () => {
  const state = useSelector<IStore, IBusketPage>((store) => store.busketPage);
  const dispatch = useDispatch();

  const { busketItems } = state;
  const products = Object.values(busketItems);

  return (
    <div>
      КОРЗИНА
      <div>Товаров в корзине: {state.allTotalCount}</div>
      <div>Общая сумма: {state.allTotalCost.toFixed(2)}</div>
      <button
        onClick={() => {
          dispatch(removeAll());
        }}
      >
        Удалить всё
      </button>
      {products.length > 0 &&
        products.map((product) => (
          <div>
            <div>{product.name}</div>
            <div>
              <input
                type="number"
                value={product.totalCount}
                onChange={(ev) => {
                  const { value } = ev.currentTarget;
                  dispatch(changeCountProduct(product.name, Number(value)));
                }}
              />
              <button
                onClick={() => {
                  dispatch(plusCountProduct(product.name));
                }}
              >
                +
              </button>
              <button
                disabled={product.totalCount === 0}
                onClick={() => {
                  dispatch(minusCountProduct(product.name));
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  dispatch(removeProduct(product));
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
