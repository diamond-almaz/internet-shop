import styled from "styled-components";
import trashIcon from "../img/trash.svg";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  padding: 0;
}
`;

export const RemoveButton = styled(Button)`
  width: 40px;
  height: 40px;
  background-image: url(${trashIcon});
  background-size: 32px;
  background-repeat: no-repeat;
  background-position: center;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }
`;
