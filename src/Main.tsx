import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { IBusketPage, IDealer, IStore } from "./types";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux";
import { Catalog } from "./pages/Catalog";
import { Busket } from "./pages/Busket";
import { MAIN_COLOR } from "./constants";
import { Header } from "./UI/components/Header";
import shoppingCartBigIcon from "./UI/img/shoppingCartBig.svg";

interface IProps {
  dealers: IDealer[];
}

export const Main = ({ dealers }: IProps) => {
  const { allTotalCount } = useSelector<IStore, IBusketPage>(
    (store) => store.busketPage
  );

  return (
    <Router>
      <Wrapper>
        <Navbar>
          <Link to="/">
            <Logo>LOGO</Logo>
          </Link>
          <Link to="/busket">
            <BusketIcon>
              <img src={shoppingCartBigIcon} alt="" />
              {allTotalCount > 0 && (
                <AllTotalCount>{allTotalCount}</AllTotalCount>
              )}
            </BusketIcon>
          </Link>
        </Navbar>
        <PageWrapper>
          <Switch>
            <Route path="/busket">
              <Header title="Корзина" />
              <Busket />
            </Route>
            <Route path="/">
              <Header title="Каталог" />
              <Catalog dealers={dealers} />
            </Route>
          </Switch>
        </PageWrapper>
      </Wrapper>
    </Router>
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
  display: flex;
  align-items: center;
  background-color: ${MAIN_COLOR};
  height: 71px;
  width: 100%;
  a {
    text-decoration: none;
  }
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
