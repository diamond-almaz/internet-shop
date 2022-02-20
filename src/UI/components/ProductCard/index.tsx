import React from "react";
import styled from "styled-components";

import { IProductItem } from "../../../types";
import { MAIN_COLOR } from "../../../constants";
import { Button } from "../styles";

import productImage from "../../img/node.png";
import shoppingCart from "../../img/shoppingCart.svg";
import plusIcon from "../../img/plus.svg";
import minusIcon from "../../img/minus.svg";

interface IProductCardProps {
  product: IProductItem;
  addedCount: number;
  onPlus: (product: IProductItem) => void;
  onMinus: (product: IProductItem, addedCount: number) => void;
}

export const ProductCard = (props: IProductCardProps) => {
  const { product, addedCount, onPlus, onMinus } = props;

  // ---------------------------------------------------

  const onPlusHandler = () => {
    onPlus(product);
  };

  const onMinusHandler = () => {
    onMinus(product, addedCount);
  };

  // ---------------------------------------------------

  return (
    <Wrapper>
      <Content>
        <ProductImage src={productImage} alt="" />

        <ProductName>{product.name}</ProductName>

        <ProductPrice>{product.price} $</ProductPrice>
      </Content>
      {addedCount !== 0 ? (
        <CounterContainer>
          <CounterButton onClick={onPlusHandler}>
            <img src={plusIcon} alt="" />
          </CounterButton>

          <Count>
            <img className="shoppingCart" src={shoppingCart} alt="" />
            <span>{addedCount}</span>
          </Count>

          <CounterButton onClick={onMinusHandler}>
            <img src={minusIcon} alt="" />
          </CounterButton>
        </CounterContainer>
      ) : (
        <AddButton onClick={onPlusHandler}>
          <img className="shoppingCart" src={shoppingCart} alt="" />

          <b>Добавить</b>
        </AddButton>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 17px 0px 10px;
`;

const ProductName = styled.span`
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 13px;
`;

const ProductPrice = styled.b`
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 6px;
`;

const footerStyles = () => `
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  font-size: 13px;
  line-height: 15px;

  img.shoppingCart {
    margin-right: 3px;
  }
`;

const AddButton = styled(Button)`
  ${footerStyles()}
  width: 100%;
  padding: 8px 15px;
  background-color: ${MAIN_COLOR};

  cursor: pointer;

  :hover {
    background-color: #124494;
  }
  :active {
    background-color: #dc5177;
  }
`;

const ProductImage = styled.img`
  width: 168px;
  height: 158px;
  margin-bottom: 13px;
`;

const CounterContainer = styled.div`
  ${footerStyles()}
  background-color: #dc5177;
  color: #ffffff;
  padding: 3px 15px;

  span {
    user-select: none;
  }
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
`;

const CounterButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;

  img {
    width: 20px;
    height: 20px;
    transition: all 0.1s ease-out;
  }
  :hover {
    img {
      width: 25px;
      height: 25px;
    }
  }
`;
