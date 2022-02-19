import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { removeProduct, removeAll } from "../redux/busket/actions";
import { IBusketPage, IStore, IBasketItem } from "../types";
import { BusketTable } from "../UI/components/BusketTable";
import { formatNumber } from "../helpers";

export const Busket = ({
  allTotalCount,
  allTotalCost,
  busketItems,
}: IBusketPage) => {
  const dispatch = useDispatch();

  const products = Object.values(busketItems);

  const onRemoveProduct = (product: IBasketItem) => {
    dispatch(removeProduct(product));
  };

  const onRemoveAll = () => {
    dispatch(removeAll());
  };

  return (
    <Wrapper>
      {products.length === 0 ? (
        <EmptyMessage>
          Корзина пустая, добавьте товары из &nbsp;
          <Link to="/">каталога</Link>
        </EmptyMessage>
      ) : (
        <>
          <AllTotalCount>Товаров в корзине: {allTotalCount}</AllTotalCount>

          <AllTotalCost>
            Общая сумма: {formatNumber(allTotalCost)} $
          </AllTotalCost>

          <BusketTable
            products={products}
            onRemoveProduct={onRemoveProduct}
            onRemoveAll={onRemoveAll}
          />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const AllTotalCount = styled.div`
  font-size: 20px;
`;

const AllTotalCost = styled(AllTotalCount)`
  margin-top: 10px;
  margin-bottom: 43px;
`;

const EmptyMessage = styled.div`
  font-family: Roboto;
  font-size: 24px;
  width: fit-content;
  margin: auto;
  margin-top: 200px;
`;
