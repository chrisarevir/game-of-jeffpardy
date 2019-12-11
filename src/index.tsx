import React from "react";
import ReactDOM from "react-dom";
// import "./styles/index.css";
import "./styles/reset.css";
import "./styles/base.css";

// import App from "./pages/App";
import Avatar from "./components/Avatar";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Avatar src="https://www.gravatar.com/avatar?s=15" rounded />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
