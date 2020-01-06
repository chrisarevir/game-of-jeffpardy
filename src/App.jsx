import React from "react";
import { Layout, Menu } from "antd";
import { HashRouter as Router, Link, Route } from "react-router-dom";

import "./styles/reset.css";
import "./styles/base.css";
import Board from "./pages/Board";
import Records from "./pages/Records";
import Home from "./pages/Home";
import Frogs from "./pages/Frogs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import PasswordForget from "./pages/PasswordForget";
import SignOutButton from "./components/SignOutButton";
import { FirebaseContext } from "./components/Firebase";

const App = () => {
  const [view, setView] = React.useState(window.location.hash);
  const [user, setUser] = React.useState(null);
  const [record, setRecord] = React.useState({});
  const [records, setRecords] = React.useState([]);

  return (
    <FirebaseContext.Consumer>
      {firebase => {
        if (!user) {
          const promises = [
            firebase.getCurrentUser(),
            firebase.getPlayerRecords()
          ];

          Promise.all(promises).then(responses => {
            setUser(responses[0]);

            const playerRecords = [];
            responses[1].forEach(doc => {
              if (doc.data().username !== "Jeff") {
                playerRecords.push({
                  name: doc.data().username,
                  total_score: doc.data().total_score
                });
              }
            });

            setRecords(playerRecords);
          });
        }

        return (
          user &&
          records.length > 0 && (
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
                    {user && user.uid && (
                      <Menu.Item key="#/board">
                        <Link to="board">Board</Link>
                      </Menu.Item>
                    )}
                    {user && user.uid && (
                      <Menu.Item key="#/records">
                        <Link to="records">Standings</Link>
                      </Menu.Item>
                    )}
                    {!user.uid && (
                      <Menu.Item key="#/signin">
                        <Link to="signin">Sign In</Link>
                      </Menu.Item>
                    )}
                    {user && user.uid && (
                      <Menu.Item key="#/account">
                        <Link to="account">Account</Link>
                      </Menu.Item>
                    )}
                    {/* {user && user.uid && (
                      <Menu.Item key="#/admin">
                        <Link to="admin">Admin</Link>
                      </Menu.Item>
                    )} */}
                  </Menu>
                  {/* {user && user.uid && <SignOutButton />} */}
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
                        return (
                          <Board
                            currentUser={user}
                            record={record}
                            setRecord={setRecord}
                          />
                        );
                      }}
                      exact
                      path="/board"
                    />
                    <Route
                      component={() => {
                        return (
                          <Records
                            currentUser={user}
                            record={record}
                            records={records}
                            setRecord={setRecord}
                          />
                        );
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
                        return <SignUp setUser={setUser} />;
                      }}
                      exact
                      path="/signup"
                    />
                    <Route
                      component={() => {
                        return <SignIn setUser={setUser} />;
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
                    {user && (
                      <Route
                        component={() => {
                          return <Account record={record} user={user} />;
                        }}
                        exact
                        path="/account"
                      />
                    )}
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
          )
        );
      }}
    </FirebaseContext.Consumer>
  );
};

export default App;
