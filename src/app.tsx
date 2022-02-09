import "./index.css";
import React from "react";
import { render } from "react-dom";

import "./assets/img/node.png";
import "./type";

export const start = () => {
  render(<div>Привет</div>, document.getElementById("app"));
};

document.addEventListener("DOMContentLoaded", () => {
  start()
});
