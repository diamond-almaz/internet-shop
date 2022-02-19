import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { IBusketItem } from "../../../types";
import { TableRow } from "./styles";
import productImage from "../../img/node.png";
import { Button, RemoveButton } from "../styles";
import { formatNumber } from "../../../helpers";
import { changeCountProduct } from "../../../redux/busket/actions";
import caretIcon from "../../img/caretUp.svg";
import { ConfirmModal } from "../ConfirmModal";

interface IBusketTableItemProps {
  product: IBusketItem;
  onRemoveProduct: (product: IBusketItem) => void;
}

export const BusketTableItem = (props: IBusketTableItemProps) => {
  const { product, onRemoveProduct } = props;
  const [count, setCount] = useState<number>(product.totalCount);
  const dispatch = useDispatch();

  const [visibleConfirmModal, setVisibleConfirmModal] = useState(false);

  useEffect(() => {
    if (count === product.totalCount) return;
    dispatch(changeCountProduct(product.name, count));
  }, [count, product.totalCount, product.name, dispatch]);

  const removeProductHandler = () => {
    onRemoveProduct(product);
  };

  const onChangeInput = (ev) => {
    const { value } = ev.currentTarget;
    if (value < 1) {
      showVisibleConfirmModal();
      return;
    }
    setCount(Number(ev.currentTarget.value));
  };

  const plusCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const minusCount = () => {
    if (count === 1) {
      showVisibleConfirmModal();
      return;
    }
    setCount((prevState) => prevState - 1);
  };

  const showVisibleConfirmModal = () => {
    setVisibleConfirmModal(true);
  };

  const hideVisibleConfirmModal = () => {
    setVisibleConfirmModal(false);
  };
  return (
    <>
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

        <RemoveButton
          title="Удаление продукта"
          onClick={showVisibleConfirmModal}
        />
      </TableRow>
      <ConfirmModal
        isOpen={visibleConfirmModal}
        title="Удаление продукта"
        description="Вы действительно хотите удалить продукт из корзины?"
        onClose={hideVisibleConfirmModal}
        onConfirm={removeProductHandler}
      />
    </>
  );
};

const ProductNameColumn = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  img {
    width: 70%;
  }
  margin-right: 18px;
`;

const CounterContainer = styled.div`
  position: relative;
  display: flex;
  min-width: 50px;
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

const CounterInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  margin: 0;
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
  width: 100%;
  height: 25px;
  padding: 0;

  :nth-child(1) {
    border-top-right-radius: 10px;
  }

  :nth-child(2) {
    border-bottom-right-radius: 10px;
    img {
      transform: rotate(180deg);
    }
  }

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
