import React from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";

import { FirebaseContext } from "../components/Firebase";

const SignIn = ({ setUser }) => {
  const [firebaseError, setFirebaseError] = React.useState({ message: "" });

  const onSignIn = firebase => {
    const userEmail = document.getElementById("email_input").value;
    const userPassword = document.getElementById("password_input").value;

    firebase
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(({ user }) => {
        setUser(user);
        window.location.hash = "#/";
      })
      .catch(error => setFirebaseError(error));
  };

  const onRedirectToSignUp = () => (window.location.hash = "#/signup");

  return (
    <FirebaseContext.Consumer>
      {firebase => (
        <Container title="Sign In">
          <div style={{ maxWidth: "300px", marginBottom: "16px" }}>
            Email <Input id="email_input" />
            Password <Input id="password_input" type="password" />
          </div>
          <Button onClick={() => onSignIn(firebase)} variant="primary">
            Submit
          </Button>
          <span style={{ marginLeft: "1rem" }}>
            <Button onClick={() => onRedirectToSignUp()} variant="warning">
              Sign Up
            </Button>
          </span>
          {firebaseError.message && <p>{firebaseError.message}</p>}
        </Container>
      )}
    </FirebaseContext.Consumer>
  );
};

export default SignIn;
