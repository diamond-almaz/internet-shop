import React from 'react';
import styled from 'styled-components';
import caretRightIcon from '../img/caretRight.svg';

interface IHeaderProps {
  title: string;
}

export const Header = ({ title }: IHeaderProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <BreadCrumbs>
        Главная
        <img src={caretRightIcon} alt='' />
        {title}
      </BreadCrumbs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
  margin-top: 27px;
  margin-bottom: 47px;
`;

const Title = styled.span`
  font-size: 7vw;
  line-height: 100%;
  margin-bottom: 15px;
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
