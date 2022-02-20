import React, { useState } from 'react';
import styled from 'styled-components';

import { IBusketItem } from '../../../types';
import { RemoveButton } from '../styles';
import { BusketTableItem } from './BusketTableItem';
import { TableRow } from './styles';
import { ConfirmModal } from '../ConfirmModal';

interface IBusketTableProps {
  products: IBusketItem[];
  onRemoveProduct: (product: IBusketItem) => void;
  onRemoveAll: () => void;
}

export const BusketTable = (props: IBusketTableProps) => {
  const { products, onRemoveProduct, onRemoveAll } = props;

  const [visibleConfirmModal, setVisibleConfirmModal] = useState(false);

  // ---------------------------------------------------

  const showVisibleConfirmModal = () => {
    setVisibleConfirmModal(true);
  };

  const hideVisibleConfirmModal = () => {
    setVisibleConfirmModal(false);
  };

  // ---------------------------------------------------

  return (
    <>
      <Wrapper>
        <TableHeader>
          <TableHeaderField>Товар</TableHeaderField>
          <TableHeaderField>Количество</TableHeaderField>
          <TableHeaderField>Цена</TableHeaderField>
          <TableHeaderField>Итого</TableHeaderField>
          <TableHeaderField>
            Удалить
            <RemoveButton
              title='Удаление всех продуктов'
              onClick={showVisibleConfirmModal}
            />
          </TableHeaderField>
        </TableHeader>
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
        title='Удаление всех продуктов'
        description='Вы действительно хотите удалить все продукты из корзины?'
        onClose={hideVisibleConfirmModal}
        onConfirm={onRemoveAll}
      />
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const TableHeaderField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TableHeader = styled(TableRow)`
  position: sticky;
  top: 71px;
  z-index: 2;
`;
