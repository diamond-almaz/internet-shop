import styled from "styled-components";

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid rgba(61, 61, 61, 0.5);
  padding: 15px 24px;
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  > div:not(:first-child),
  > b,
  > button {
    margin: auto;
  }
`;
