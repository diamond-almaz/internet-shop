import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

import { Button } from "./styles";
import closeIcon from "../img/close.svg";
import { MAIN_COLOR } from "../../constants";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "15px",
  },
};

Modal.setAppElement("#app");

interface IConfirmModal {
  isOpen: boolean;

  title: string;

  description: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmModal = ({
  isOpen,
  title,
  description,
  onClose,
  onConfirm,
}: IConfirmModal) => {
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc
      onRequestClose={onClose}
      style={customStyles}
    >
      <Wrapper>
        <Header>
          <span>{title}</span>
          <CloseButton onClick={onClose}>
            <img src={closeIcon} alt="" />
          </CloseButton>
        </Header>

        <Content>{description}</Content>

        <Footer>
          <CancelButton onClick={onClose}>Отменить</CancelButton>

          <ConfirmButton onClick={onConfirm}>Подтвердить</ConfirmButton>
        </Footer>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  font-family: Roboto;
  width: 20vw;
  color: #3d3d3d;
`;

const Header = styled.div`
  span {
    font-size: 20px;
    margin-bottom: 17px;
    display: block;
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 7px;
  right: 7px;

  width: 21px;
  height: 21px;

  img {
    width: 21px;
    height: 21px;
    opacity: 0.5;
  }
`;

const Content = styled.div`
  font-weight: 300;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 40px;

  button {
    padding: 5px 10px;
    border-radius: 5px;
    box-sizing: border-box;
    height: 31px;
    font-weight: 300;
  }
`;

const CancelButton = styled(Button)`
  color: #3d3d3d;
  border: 1px solid #3d3d3d;
  margin-right: 10px;
`;

const ConfirmButton = styled(Button)`
  background-color: ${MAIN_COLOR};

  :hover {
    background-color: #124494;
  }
  :active {
    background-color: #dc5177;
  }
`;
