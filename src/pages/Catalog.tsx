import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { receiveProducts, receiveProductsByDealers } from "../redux/actions";
import { addProduct, changeCountProduct } from "../redux/busket/actions";
import { IDealer, IProductItem, IBasketItem, IStore } from "../types";
import { ProductCard } from "../UI/components/ProductCard";
import { SearchFilter } from "../UI/components/SearchFilter";
import { Spinner } from "../UI/components/spinner";

interface IProps {
  dealers: IDealer[];
}

export const Catalog = ({ dealers }: IProps) => {
  const state = useSelector<IStore, IStore>((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    onSearch();
  }, []);

  const onSearch = (IDs?: string[]) => {
    if (IDs?.length > 0) {
      dispatch(receiveProductsByDealers(IDs));
    } else {
      dispatch(receiveProducts());
    }
  };

  const plusProductHandler = (product: IProductItem) => {
    dispatch(addProduct(product));
  };

  const minusProductHandler = (product: IBasketItem, addedCount: number) => {
    dispatch(changeCountProduct(product.name, addedCount - 1));
  };

  const {
    catalogPage: { products, loading },
    busketPage,
  } = state;

  const productsArray = Object.values(products);

  const productsLenght = productsArray.length;
  return (
    <>
      <SearchFilter dealers={dealers} onSearch={onSearch} />

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
                      busketPage.busketItems[product.name]
                        ? busketPage.busketItems[product.name].totalCount
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
