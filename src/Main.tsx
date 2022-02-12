import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { IDealer } from "./types";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Catalog } from "./pages/Catalog";
import { Busket } from "./pages/Busket";

interface IProps {
  dealers: IDealer[];
}

export const Main = ({ dealers }: IProps) => {
  console.log();
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/busket">
            <Busket />
          </Route>
          <Route path="/">
            <Catalog dealers={dealers} />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
};
