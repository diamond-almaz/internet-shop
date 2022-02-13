import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { IBusketItem } from "../../../types";
import { TableRow } from "./styles";
import productImage from "../../img/node.png";
import trashIcon from "../../img/trash.svg";
import { Button } from "../styles";
import { formatNumber } from "../../../helpers";
import { changeCountProduct } from "../../../redux/busket/actions";
import { useDispatch } from "react-redux";

interface IBusketTableItemProps {
  product: IBusketItem;
  onRemoveProduct: (product: IBusketItem) => void;
}

export const BusketTableItem = (props: IBusketTableItemProps) => {
  const { product, onRemoveProduct } = props;
  const [count, setCount] = useState<number>(product.totalCount);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count === product.totalCount) return;
    dispatch(changeCountProduct(product.name, count));
  }, [count, product.name]);

  const removeProductHandler = () => {
    onRemoveProduct(product);
  };

  const onChangeInput = (ev) => {
    const { value } = ev.currentTarget;
    if (value < 0) return;
    setCount(Number(ev.currentTarget.value));
  };

  const plusCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const minusCount = () => {
    if (count === 0) return;
    setCount((prevState) => prevState - 1);
  };
  return (
    <TableRow>
      <ProductNameColumn>
        <img src={productImage} alt="" />
        <span>{product.name}</span>
      </ProductNameColumn>

      <CounterContainer isRedBorder={count === 0}>
        <CounterInput type="number" value={count} onChange={onChangeInput} />
        <CounerTriggers>
          <CounerTriggerButton onClick={plusCount}>+</CounerTriggerButton>
          <CounerTriggerButton onClick={minusCount}>-</CounerTriggerButton>
        </CounerTriggers>
      </CounterContainer>

      <b>{formatNumber(product.price)} $</b>

      <b>{formatNumber(product.totalCost)} $</b>

      <RemoveButton onClick={removeProductHandler} />
    </TableRow>
  );
};

const ProductNameColumn = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 168px;
    height: 158px;
  }
  margin-right: 18px;
`;

const RemoveButton = styled(Button)`
  width: 32px;
  height: 32px;
  background-image: url(${trashIcon});
  background-size: 32px;
  background-repeat: no-repeat;
`;

const CounterContainer = styled.div<{ isRedBorder: boolean }>`
  position: relative;
  display: flex;
  width: 30%;
  height: 51px;
  border: 1px solid ${({ isRedBorder }) => (isRedBorder ? "#94123d" : "#3d3d3d")};
  border-radius: 10px;
  padding: 5px;
  box-sizing: border-box;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    background-color: #3d3d3d;
    height: 100%;
    width: 1px;
  }
`;

const CounterInput = styled.input`
  outline: none;
  border: none;
  width: calc(50% - 5px);
  height: 100%;
  -webkit-appearance: none;
  margin: 0;
`;

const CounerTriggers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CounerTriggerButton = styled(Button)`
  color: black;
`;
