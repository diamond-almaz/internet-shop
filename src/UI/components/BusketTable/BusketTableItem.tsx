import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { IBusketItem } from "../../../types";
import { TableRow } from "./styles";
import productImage from "../../img/node.png";
import trashIcon from "../../img/trash.svg";
import { Button } from "../styles";
import { formatNumber } from "../../../helpers";
import { changeCountProduct } from "../../../redux/busket/actions";
import caretIcon from "../../img/caretUp.svg";

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

      <CounterContainer>
        <CounterInputContainer>
          <CounterInput
            type="number"
            value={count}
            onChange={onChangeInput}
            isRed={count === 0}
          />
        </CounterInputContainer>
        <CounerTriggers>
          <CounerTriggerButton onClick={plusCount}>
            <img src={caretIcon} alt="" />
          </CounerTriggerButton>
          <CounerTriggerButton onClick={minusCount}>
            <img src={caretIcon} alt="" />
          </CounerTriggerButton>
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

const CounterContainer = styled.div`
  position: relative;
  display: flex;
  width: 30%;
  height: 51px;
  border: 1px solid #3d3d3d;
  border-radius: 10px;
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

const CounterInputContainer = styled.div`
  padding: 5px;
  width: calc(50% - 10px);
`;

const CounterInput = styled.input<{ isRed: boolean }>`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  margin: 0;
  color: ${({ isRed }) => (isRed ? "#c21750" : "#3d3d3d")};
  text-align: center;
  padding: 0;

  margin: 0;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }
`;

const CounerTriggers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const CounerTriggerButton = styled(Button)`
  color: black;
  width: 25px;
  height: 25px;
  padding: 0;
  :nth-child(2) {
    img {
      transform: rotate(180deg);
    }
  }
`;
