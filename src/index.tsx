import React from "react";
import ReactDOM from "react-dom";
// import "./styles/index.css";
import "./styles/reset.css";
import "./styles/base.css";

// import App from "./pages/App";
import Table from "./components/Table";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Table bordered dark centered>
    <thead>
      <tr>
        <th>Table.is-bordered</th>
        <th>Table.is-centered</th>
        <th>Table.is-centered</th>
        <th>Table.is-centered</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Thou hast had a good morning</td>
        <td>Thou hast had a good afternoon</td>
        <td>Thou hast had a good evening</td>
        <td>Thou hast had a good night</td>
      </tr>
      <tr>
        <td>Thou hast had a good morning :D</td>
        <td>Thou hast had a good afternoon</td>
        <td>Thou hast had a good evening</td>
        <td>Thou hast had a good night</td>
      </tr>
    </tbody>
  </Table>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
