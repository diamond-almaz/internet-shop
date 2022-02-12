import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { IDealer } from "../../types";
import { MAIN_COLOR } from "../../constants";
import { Button } from "./styles";

interface ISearchFilter {
  dealers: IDealer[];
  onSearch: (IDs?: string[]) => void;
}

export const SearchFilter = (props: ISearchFilter) => {
  const { dealers, onSearch } = props;

  const dealersOptions = dealers.map((id) => ({
    value: id,
    label: id,
  }));

  const selectHandler = (data) => {
    onSearch(data.map(({ value }) => value));
  };

  return (
    <Wrapper>
      <Select
        isClearable
        isMulti
        className="Select"
        placeholder="Выбрать диллера"
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
  width: 400px;
  .Select {
    width: 100%;
  }
`;

// const SelectWrapper = styled.div`
// `;

// const SearchButton = styled(Button)`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: 500;
//   background-color: ${MAIN_COLOR};
//   padding: 9px 20px;
//   border-radius: 5px;
// `;
