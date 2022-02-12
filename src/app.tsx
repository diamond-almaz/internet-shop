import "./index.css";
import React from "react";
import { render } from "react-dom";

import "./assets/img/node.png";
import { getDealers } from "./api";
import { IDealer } from "./types";
import { Main } from "./Main";

const start = (dealers: IDealer[]) => {
  render(<Main dealers={dealers} />, document.getElementById("app"));
};

document.addEventListener("DOMContentLoaded", async () => {
  const dealers = await getDealers();
  start(dealers);
});
