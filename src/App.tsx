import React from "react";
import { Layout, Menu } from "antd";
import { HashRouter as Router, Link, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/base.css";
import Board from "./pages/Board";

const App: React.FC = () => {
  const [view, setView] = React.useState(window.location.hash);

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
                return <div>Login and whatnot?</div>;
              }}
              exact
              path="/"
            />
            <Route
              component={() => {
                return <Board />;
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
