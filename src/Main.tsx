import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { IDealer } from "./types";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Catalog } from "./pages/Catalog";
import { Busket } from "./pages/Busket";
import { MAIN_COLOR } from "./constants";
import { Header } from "./UI/components/Header";

interface IProps {
  dealers: IDealer[];
}

export const Main = ({ dealers }: IProps) => {
  console.log();
  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Navbar>
            <Link to="/">
              <Logo>LOGO</Logo>
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
    </Provider>
  );
};

const Wrapper = styled.div`
  /* width: 70vw; */
  margin: auto;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
  color: #3d3d3d;
`;

const Navbar = styled.div`
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
