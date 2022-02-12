import React from "react";
import styled from "styled-components";
import caretRightIcon from "../img/caretRight.svg";

interface IHeaderProps {
  title: string;
}

export const Header = ({ title }: IHeaderProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <BreadCrumbs>
        Главная
        <img src={caretRightIcon} alt="" />
        {title}
      </BreadCrumbs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto;
  text-transform: uppercase;
  width: 100%;
  margin-top: 27px;
`;

const Title = styled.span`
  font-size: 96px;
  line-height: 112px;
`;

const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  img {
    margin: 0 7px;
  }
`;
