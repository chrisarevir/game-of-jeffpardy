import React from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";

import { FirebaseContext } from "../components/Firebase";

const SignUp = () => {
  const [firebaseError, setFirebaseError] = React.useState({ message: "" });

  const onSubmitCredentials = firebase => {
    const userEmail = document.getElementById("email_input").value;
    const userPassword = document.getElementById("password_input").value;

    // firebase
    //   .createUser(userEmail, userPassword)
    //   .then(() => (window.location.hash = "#/home"))
    //   .catch(error => setFirebaseError(error));
  };

  // TODO: validation on user creation

  return (
    <FirebaseContext.Consumer>
      {firebase => (
        <Container title="Sign Up">
          <div style={{ maxWidth: "300px", marginBottom: "16px" }}>
            Email <Input id="email_input" />
            Password <Input id="password_input" />
          </div>
          <Button
            onClick={() => onSubmitCredentials(firebase)}
            variant="primary"
          >
            Sign Up
          </Button>
          {firebaseError.message && <p>{firebaseError.message}</p>}
        </Container>
      )}
    </FirebaseContext.Consumer>
  );
};

export default SignUp;
