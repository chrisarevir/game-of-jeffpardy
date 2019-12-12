import React from "react";
import { Layout, Menu } from "antd";
import Icon from "./components/Icon";
import { HashRouter as Router, Link, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/base.css";
import Board from "./pages/Board";
import { defaultRecord } from "./utils/constants";

const App: React.FC = () => {
  const [view, setView] = React.useState(window.location.hash);

  const record = JSON.parse(localStorage.getItem("playerRecord") || "{}");

  if (!record.modified) {
    console.log("setting new");
    localStorage.setItem("playerRecord", JSON.stringify(defaultRecord));
  }

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout.Sider theme="light">
          <Menu
            onSelect={({ key }) => setView(key)}
            selectedKeys={[view]}
            mode="inline"
          >
            <Menu.Item key="#/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="#/board">
              <Link to="board">Board</Link>
            </Menu.Item>
          </Menu>
        </Layout.Sider>

        <Layout>
          <Layout.Content style={{ padding: "24px" }}>
            <Route
              component={() => {
                return (
                  <div>
                    <Icon icon="coin" size="lg" />
                  </div>
                );
              }}
              exact
              path="/"
            />
            <Route
              component={() => {
                return <Board record={record} />;
              }}
              exact
              path="/board"
            />
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
