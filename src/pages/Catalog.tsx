import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { addProduct, changeCountProduct } from '../redux/busket/actions';
import { IDealer, IProductItem, IBusketPage } from '../types';
import { ProductCard } from '../UI/components/ProductCard';
import { SearchFilter } from '../UI/components/SearchFilter';
import { Spinner } from '../UI/components/Spinner';
import { selectDealers } from '../redux/catalog/actions';

interface IProps {
  products: { [name: string]: IProductItem };

  busket: IBusketPage;
  loading: boolean;

  selectedDealers: IDealer[];
  dealers: IDealer[];
}

export const Catalog = ({ products, busket, loading, dealers }: IProps) => {
  const dispatch = useDispatch();

  // ---------------------------------------------------

  const productsArray = Object.values(products);

  const productsLenght = productsArray.length;

  // ---------------------------------------------------

  const selectDealer = (IDs: IDealer[]) => {
    dispatch(selectDealers(IDs));
  };

  // ---------------------------------------------------

  const plusProductHandler = (product: IProductItem) => {
    dispatch(addProduct(product));
  };

  const minusProductHandler = (product: IProductItem, addedCount: number) => {
    dispatch(changeCountProduct(product.name, addedCount - 1));
  };

  // ---------------------------------------------------

  return (
    <>
      <SearchFilter dealers={dealers} onSearch={selectDealer} />

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
