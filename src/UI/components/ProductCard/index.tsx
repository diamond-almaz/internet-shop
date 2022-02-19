import React from "react";
import styled from "styled-components";

import { IProductItem } from "../../../types";
import { MAIN_COLOR } from "../../../constants";
import { Button } from "../styles";

import productImage from "../../img/node.png";
import shoppingCart from "../../img/shoppingCart.svg";

interface IProductCardProps {
  product: IProductItem;
  onAdd: (product: IProductItem) => void;
}

export const ProductCard = (props: IProductCardProps) => {
  const { product, onAdd } = props;

  const addHandler = () => {
    onAdd(product);
  };

  return (
    <Wrapper>
      <Content>
        <ProductImage src={productImage} alt="" />

        <ProductName>{product.name}</ProductName>

        <ProductPrice>{product.price} $</ProductPrice>
      </Content>
      <AddButton onClick={addHandler}>
        <img src={shoppingCart} alt="" />
        <b>Добавить</b>
      </AddButton>
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

const AddButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  line-height: 15px;
  padding: 8px 15px;
  background-color: ${MAIN_COLOR};
  width: 100%;

  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  cursor: pointer;

  img {
    margin-right: 3px;
  }

  :hover {
    background-color: #124494;
  }
  :active {
    background-color: #94123d;
  }
`;

const ProductImage = styled.img`
  width: 168px;
  height: 158px;
  margin-bottom: 13px;
`;
