import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  removeAll,
  changeCountProduct,
  plusCountProduct,
  minusCountProduct,
} from "../redux/busket/actions";
import { IBusketPage, IStore, IBasketItem } from "../types";
import { BusketTable } from "../UI/components/BusketTable";

export const Busket = () => {
  const state = useSelector<IStore, IBusketPage>((store) => store.busketPage);
  const dispatch = useDispatch();

  const { busketItems } = state;
  const products = Object.values(busketItems);

  const onRemoveProduct = (product: IBasketItem) => {
    dispatch(removeProduct(product));
  };

  const onRemoveAll = () => {
    dispatch(removeAll());
  };

  return (
    <Wrapper>
      <AllTotalCount>Товаров в корзине: {state.allTotalCount}</AllTotalCount>

      <AllTotalCost>
        Общая сумма: {state.allTotalCost.toFixed(2)} $
      </AllTotalCost>

      <BusketTable
        products={products}
        onRemoveProduct={onRemoveProduct}
        onRemoveAll={onRemoveAll}
      />

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
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const AllTotalCount = styled.div`
  font-size: 20px;
`;

const AllTotalCost = styled(AllTotalCount)`
  margin-top: 10px;
  margin-bottom: 43px;
`;
