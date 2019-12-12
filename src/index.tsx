import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.css";
import "./styles/base.css";

import Radio from "./components/Radio";
import Text from "./components/Text";
import Calendar from "./components/Calendar";
import * as serviceWorker from "./serviceWorker";

const ToView = () => (
  <div>
    <Calendar />
    <label>
      <Radio autoFocus name="test" />
      <Text>Yes</Text>
    </label>
    <label>
      <Radio name="test" />
      <Text>No</Text>
    </label>
  </div>
);

ReactDOM.render(<ToView />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
