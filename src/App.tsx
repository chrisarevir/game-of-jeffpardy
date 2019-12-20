import React from "react";
import { Layout, Menu } from "antd";
import { HashRouter as Router, Link, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/base.css";
import Board from "./pages/Board";
import Records from "./pages/Records";
import { defaultRecord } from "./utils/constants";
import Home from "./pages/Home";
import Frogs from "./pages/Frogs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// import Account from './pages/Account';
import Admin from "./pages/Admin";
import PasswordForget from "./pages/PasswordForget";
import Button from "./components/Button";

const App: React.FC = () => {
  const [view, setView] = React.useState(window.location.hash);

  const record = JSON.parse(localStorage.getItem("playerRecord") || "{}");

  if (!record.modified) {
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
            <Menu.Item key="#/records">
              <Link to="records">Records</Link>
            </Menu.Item>
            <Menu.Item key="#/signup">
              <Link to="signup">Sign Up</Link>
            </Menu.Item>
            <Menu.Item key="#/signin">
              <Link to="signin">Sign In</Link>
            </Menu.Item>
            <Menu.Item key="#/admin">
              <Link to="admin">Admin</Link>
            </Menu.Item>
          </Menu>
          <div>
            <Button
              onClick={() => {}}
              style={{ height: "2.5rem", marginLeft: "1.5rem" }}
              variant="primary"
            >
              Sign Out
            </Button>
          </div>
        </Layout.Sider>

        <Layout>
          <Layout.Content style={{ padding: "24px" }}>
            <Route
              component={() => {
                return <Home />;
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
            <Route
              component={() => {
                return <Records record={record} />;
              }}
              exact
              path="/records"
            />
            <Route
              component={() => {
                return <Frogs />;
              }}
              exact
              path="/frogs"
            />
            <Route
              component={() => {
                return <SignUp />;
              }}
              exact
              path="/signup"
            />
            <Route
              component={() => {
                return <SignIn />;
              }}
              exact
              path="/signin"
            />
            <Route
              component={() => {
                return <Admin />;
              }}
              exact
              path="/admin"
            />
            <Route
              component={() => {
                return <PasswordForget />;
              }}
              exact
              path="/pw-forget"
            />
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
