import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.css";
import "./styles/base.css";

import Text from "./components/Text";
import * as serviceWorker from "./serviceWorker";

const ToView = () => (
  <>
    <Text variant="primary">primary</Text>
    <Text variant="success">success</Text>
    <Text variant="warning">warning</Text>
    <Text variant="error">error</Text>
    <Text variant="disabled">disabled</Text>
  </>
);

ReactDOM.render(<ToView />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
