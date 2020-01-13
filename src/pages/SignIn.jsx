import React from "react";

import { Container, TextInput, Button } from "nes-react";

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
        <Container title="Sign In" rounded>
          <div style={{ maxWidth: "300px", marginBottom: "16px" }}>
            Email <TextInput id="email_input" />
            Password <TextInput id="password_input" type="password" />
          </div>
          <Button onClick={() => onSignIn(firebase)} primary>
            Submit
          </Button>
          <span style={{ marginLeft: "1rem" }}>
            <Button onClick={() => onRedirectToSignUp()} warning>
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
