import React, { useState } from "react";
import styled from "styled-components";
import { IBusketItem } from "../../../types";
import { Button } from "../styles";
import { BusketTableItem } from "./BusketTableItem";
import { TableRow } from "./styles";
import trashIcon from "../../img/trash.svg";
import { ConfirmModal } from "../ConfirmModal";

interface IBusketTableProps {
  products: IBusketItem[];
  onRemoveProduct: (product: IBusketItem) => void;
  onRemoveAll?: () => void;
}

export const BusketTable = (props: IBusketTableProps) => {
  const { products, onRemoveProduct, onRemoveAll } = props;

  const [visibleConfirmModal, setVisibleConfirmModal] = useState(false);

  const showVisibleConfirmModal = () => {
    setVisibleConfirmModal(true);
  };

  const hideVisibleConfirmModal = () => {
    setVisibleConfirmModal(false);
  };


  return (
    <>
      <Wrapper>
        <TableRow>
          <span>Товар</span>
          <span>Количество</span>
          <span>Цена</span>
          <span>Итого</span>
          <RemoveAllColumn>
            Удалить
            <RemoveAllButton onClick={showVisibleConfirmModal} />
          </RemoveAllColumn>
        </TableRow>
        {products.map((product) => (
          <BusketTableItem
            key={product.name}
            product={product}
            onRemoveProduct={onRemoveProduct}
          />
        ))}
      </Wrapper>

      <ConfirmModal
        isOpen={visibleConfirmModal}
        title="Удаление всех продуктов"
        description="Вы действительно хотите удалить все продукты из корзины?"
        onClose={hideVisibleConfirmModal}
        onConfirm={onRemoveAll}
      />
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const RemoveAllColumn = styled.div`
  display: flex;
  align-items: center;
`;

const RemoveAllButton = styled(Button)`
  margin-left: 9px;
  width: 25px;
  height: 25px;
  background-image: url(${trashIcon});
  background-size: 25px;
  background-repeat: no-repeat;
`;
