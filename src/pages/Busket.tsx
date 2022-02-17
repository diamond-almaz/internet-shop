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
import { formatNumber } from "../helpers";

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
        Общая сумма: {formatNumber(state.allTotalCost)} $
      </AllTotalCost>

      <BusketTable
        products={products}
        onRemoveProduct={onRemoveProduct}
        onRemoveAll={onRemoveAll}
      />
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
