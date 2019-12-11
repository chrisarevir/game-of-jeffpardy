import React from "react";
import ReactDOM from "react-dom";
// import "./styles/index.css";
import "./styles/reset.css";
import "./styles/base.css";

import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <p className="nes-balloon from-left nes-pointer">
    This is not a clickable element, but it's an area of the pointer.
  </p>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
