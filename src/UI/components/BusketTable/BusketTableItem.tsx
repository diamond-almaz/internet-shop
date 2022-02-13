import React from "react";
import styled from "styled-components";

import { IBusketItem } from "../../../types";
import { TableRow } from "./styles";
import productImage from "../../img/node.png";
import trashIcon from "../../img/trash.svg";
import { Button } from "../styles";

interface IBusketTableItemProps {
  product: IBusketItem;
  onRemoveProduct: (product: IBusketItem) => void;
}

export const BusketTableItem = (props: IBusketTableItemProps) => {
  const { product, onRemoveProduct } = props;

  const removeProductHandler = () => {
    onRemoveProduct(product);
  };
  return (
    <TableRow>
      <ProductNameColumn>
        <img src={productImage} alt="" />
        <span>{product.name}</span>
      </ProductNameColumn>
      <ChangeCountContainer>
        <ChangeCountInput type="number" value={product.totalCount} />
      </ChangeCountContainer>
      <b>{product.price} $</b>
      <b>{product.totalCost} $</b>
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

const ChangeCountContainer = styled.div`
  position: relative;
  display: flex;
  width: 30%;
  height: 51px;
  border: 1px solid #3d3d3d;
  border-radius: 10px;
  padding: 5px;
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

const ChangeCountInput = styled.input`
  outline: none;
  border: none;
  width: calc(50% - 5px);
  height: 100%;
  -webkit-appearance: none;
  margin: 0;
`;
