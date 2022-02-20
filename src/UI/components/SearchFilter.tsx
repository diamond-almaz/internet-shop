import React from 'react';
import styled from 'styled-components';
import Select, { MultiValue } from 'react-select';
import { IDealer } from '../../types';

interface ISearchFilter {
  dealers: IDealer[];
  onSearch: (IDs: IDealer[]) => void;
}

export const SearchFilter = (props: ISearchFilter) => {
  const { dealers, onSearch } = props;

  // ---------------------------------------------------

  const dealersOptions = dealers.map((id) => ({
    value: id,
    label: id,
  }));

  // ---------------------------------------------------

  const selectHandler = (
    data: MultiValue<{ value: IDealer; label: IDealer }>
  ) => {
    onSearch(data.map(({ value }) => value));
  };

  // ---------------------------------------------------

  return (
    <Wrapper>
      <Select
        isClearable
        isMulti
        className='Select'
        placeholder='Выбрать диллера'
        options={dealersOptions}
        onChange={selectHandler}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background: rgba(40, 121, 254, 0.18);
  border-radius: 6px;
  padding: 11px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  .Select {
    width: 100%;
  }
`;
