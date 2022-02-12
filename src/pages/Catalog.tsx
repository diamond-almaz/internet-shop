import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { receiveProducts } from "../redux/actions";
import { ICatalogPage, IStore } from "../types";

interface IProps {
  dealers: IDealer[];
}

export const Catalog = ({ dealers }: IProps) => {
  const state = useSelector<IStore, ICatalogPage>((store) => store.catalogPage);
  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(receiveProducts());
  };

  return (
    <div>
      <button onClick={onSearch}>Получить список товаров</button>
      {state.products.length > 0 &&
        state.products.map((product) => {
          return (
            <div
              onClick={() => {
                dispatch(addProduct(product));
              }}
            >
              {product.name}
            </div>
          );
        })}
      <Link to="/busket">КОРЗИНА</Link>
    </div>
  );
};
