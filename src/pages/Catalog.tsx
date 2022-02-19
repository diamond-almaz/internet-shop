import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { receiveProducts, receiveProductsByDealers } from "../redux/actions";
import { addProduct, changeCountProduct } from "../redux/busket/actions";
import {
  IDealer,
  IProductItem,
  IBasketItem,
  IStore,
  ICatalogPage,
  IBusketPage,
} from "../types";
import { ProductCard } from "../UI/components/ProductCard";
import { SearchFilter } from "../UI/components/SearchFilter";
import { Spinner } from "../UI/components/Spinner";
import { selectDealers } from "../redux/catalog/actions";

interface IProps {
  products: { [name: string]: IProductItem[] };

  busket: IBusketPage;
  loading: boolean;

  selectedDealers: IDealer[];
  dealers: IDealer[];
}

export const Catalog = ({ products, busket, loading, dealers }: IProps) => {
  const dispatch = useDispatch();

  const plusProductHandler = (product: IProductItem) => {
    dispatch(addProduct(product));
  };

  const minusProductHandler = (product: IBasketItem, addedCount: number) => {
    dispatch(changeCountProduct(product.name, addedCount - 1));
  };

  const productsArray = Object.values(products);

  const productsLenght = productsArray.length;
  return (
    <>
      <SearchFilter dealers={dealers} onSearch={() => {}} />

      {loading ? (
        <Spinner />
      ) : (
        <>
          <FoundedProducts>Найдено товаров: {productsLenght}</FoundedProducts>

          <ProductCardsWrapper>
            {productsLenght > 0 &&
              productsArray.map((product) => {
                return (
                  <ProductCard
                    key={product.name}
                    product={product}
                    addedCount={
                      busket.busketItems[product.name]
                        ? busket.busketItems[product.name].totalCount
                        : 0
                    }
                    onPlus={plusProductHandler}
                    onMinus={minusProductHandler}
                  />
                );
              })}
          </ProductCardsWrapper>
        </>
      )}
    </>
  );
};

const ProductCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 38px;
  justify-content: center;
  padding-bottom: 38px;
`;

const FoundedProducts = styled.div`
  font-family: Roboto;
  font-size: 20px;
  margin: 37px 0;
`;
