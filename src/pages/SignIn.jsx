import React from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";

import { FirebaseContext } from "../components/Firebase";

const SignIn = () => {
  const [firebaseError, setFirebaseError] = React.useState({ message: "" });

  const onSignIn = firebase => {
    const userEmail = document.getElementById("email_input").value;
    const userPassword = document.getElementById("password_input").value;

    // firebase
    //   .signInWithEmailAndPassword(userEmail, userPassword)
    //   .then(() => (window.location.hash = "#/home"))
    //   .catch(error => setFirebaseError(error));
  };

  // TODO: validation on login

  return (
    <FirebaseContext.Consumer>
      {firebase => (
        <Container title="Sign In">
          <div style={{ maxWidth: "300px", marginBottom: "16px" }}>
            Email <Input id="email_input" />
            Password <Input id="password_input" />
          </div>
          <Button onClick={() => onSignIn(firebase)} variant="primary">
            Sign In
          </Button>
          {firebaseError.message && <p>{firebaseError.message}</p>}
        </Container>
      )}
    </FirebaseContext.Consumer>
  );
};

export default SignIn;
