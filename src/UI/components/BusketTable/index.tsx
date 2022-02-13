import React from "react";
import styled from "styled-components";
import { IBusketItem } from "../../../types";
import { BusketTableItem } from "./BusketTableItem";
import { TableRow } from "./styles";

interface IBusketTableProps {
  products: IBusketItem[];
  onRemoveProduct: (product: IBusketItem) => void;
  onRemoveAll?: () => void;
}

export const BusketTable = (props: IBusketTableProps) => {
  const { products, onRemoveProduct, onRemoveAll } = props;

  return (
    <Wrapper>
      <TableRow>
        <div>Товар</div>
        <div>Количество</div>
        <div>Цена</div>
        <div>Итого</div>
        <div>Удалить</div>
      </TableRow>
      {products.map((product) => (
        <BusketTableItem
          key={product.name}
          product={product}
          onRemoveProduct={onRemoveProduct}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
