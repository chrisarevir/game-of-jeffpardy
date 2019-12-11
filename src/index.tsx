import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.css";
import "./styles/base.css";

import Button from "./components/Button";
import * as serviceWorker from "./serviceWorker";

const ToView = () => (
  <>
    <Button>normal</Button>
    <Button variant="primary">primary</Button>
    <Button variant="success">success</Button>
    <Button variant="warning">warning</Button>
    <Button variant="error">error</Button>
    <Button variant="disabled">disabled</Button>
  </>
);

ReactDOM.render(<ToView />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
