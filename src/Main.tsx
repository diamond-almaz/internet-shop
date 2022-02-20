import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Route, Switch, Link, useLocation } from 'react-router-dom';

import { IDealer, IStore } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { Catalog } from './pages/Catalog';
import { Busket } from './pages/Busket';
import { MAIN_COLOR } from './constants';
import { Header } from './UI/components/Header';
import shoppingCartBigIcon from './UI/img/shoppingCartBig.svg';
import { receiveProducts, receiveProductsByDealers } from './redux/actions';

interface IProps {
  dealers: IDealer[];
}

export const Main = ({ dealers }: IProps) => {
  const store = useSelector<IStore, IStore>((store) => store);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // ---------------------------------------------------

  const { busketPage, catalogPage } = store;

  const { allTotalCount } = busketPage;

  // ---------------------------------------------------

  useEffect(() => {
    const IDs = store.catalogPage.selectedDealers;

    if (IDs?.length > 0) {
      dispatch(receiveProductsByDealers(IDs));
    } else {
      dispatch(receiveProducts());
    }
  }, [store.catalogPage.selectedDealers, dispatch]);

  // ---------------------------------------------------

  return (
    <Wrapper>
      <Navbar>
        <Link to='/'>
          <Logo>LOGO</Logo>
        </Link>
        <Line />
        <Link to='/busket'>
          <BusketIcon>
            <img src={shoppingCartBigIcon} alt='' />
            {allTotalCount > 0 && (
              <AllTotalCount>{allTotalCount}</AllTotalCount>
            )}
          </BusketIcon>
        </Link>
      </Navbar>
      <PageWrapper>
        <Switch>
          <Route path='/busket'>
            <Header title='Корзина' />
            <Busket {...busketPage} />
          </Route>
          <Route path='/'>
            <Header title='Каталог' />
            <Catalog {...catalogPage} busket={busketPage} dealers={dealers} />
          </Route>
        </Switch>
      </PageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
  color: #3d3d3d;
`;

const Navbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  background-color: ${MAIN_COLOR};
  height: 71px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
`;

const Line = styled.div`
  height: calc(100% - 30px);
  width: 1px;
  background-color: #ffffff;
  margin: 0 15px;
`;

const Logo = styled.b`
  font-family: Roboto;
  font-size: 48px;
  line-height: 56px;
  text-decoration: none;

  color: #ffffff;
`;

const PageWrapper = styled.div`
  padding: 0 72px;
`;

const AllTotalCount = styled.span`
  position: absolute;
  left: 23px;
  background-color: brown;
  color: #fff;
  border-radius: 12px;
  padding: 0 7px;
  font-size: 15px;
`;

const BusketIcon = styled.div`
  position: relative;
`;
