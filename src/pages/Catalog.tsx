import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { receiveProducts, receiveProductsByDealers } from "../redux/actions";
import { addProduct } from "../redux/busket/actions";
import { ICatalogPage, IDealer, IProductItem, IStore } from "../types";
import { ProductCard } from "../UI/components/ProductCard";
import { Header } from "../UI/components/Header";
import { SearchFilter } from "../UI/components/SearchFilter";

interface IProps {
  dealers: IDealer[];
}

export const Catalog = ({ dealers }: IProps) => {
  const state = useSelector<IStore, ICatalogPage>((store) => store.catalogPage);
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

  const addProductHandler = (product: IProductItem) => {
    dispatch(addProduct(product));
  };

  const productsLenght = state.products.length;
  return (
    <>
      <SearchFilter dealers={dealers} onSearch={onSearch} />

      <FoundedProducts>Найдено товаров: {productsLenght}</FoundedProducts>

      <ProductCardsWrapper>
        {productsLenght > 0 &&
          state.products.map((product) => {
            return (
              <ProductCard
                key={product.name}
                product={product}
                onAdd={addProductHandler}
              />
            );
          })}
      </ProductCardsWrapper>
      <Link to="/busket">КОРЗИНА</Link>
    </>
  );
};

const Wrapper = styled.div`
`;

const ProductCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 38px;
`;

const FoundedProducts = styled.div`
  font-family: Roboto;
  font-size: 20px;
`;
