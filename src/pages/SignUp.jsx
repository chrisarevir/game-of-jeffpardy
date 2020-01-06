import React from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";

import { defaultPlayerRecord } from "../utils/constants";
import { FirebaseContext } from "../components/Firebase";

const SignUp = ({ setUser }) => {
  const [firebaseError, setFirebaseError] = React.useState({ message: "" });

  const onSubmitCredentials = firebase => {
    const username = document.getElementById("username_input").value;
    const userEmail = document.getElementById("email_input").value;
    const userPassword = document.getElementById("password_input").value;
    const userConfirmPassword = document.getElementById(
      "confirm_password_input"
    ).value;

    // The most basic of validation :praise_the_sun:
    const isValidEmail = userEmail && userEmail.includes("@");
    const isValidPassword = userPassword === userConfirmPassword;

    if (isValidEmail && isValidPassword) {
      firebase
        .createUser(userEmail, userPassword)
        .then(({ user }) => {
          const playerRecord = {
            ...defaultPlayerRecord,
            user_id: user.uid,
            username: user.displayName
          };

          firebase.addPlayerRecord(playerRecord, user.uid);
          user.updateProfile({ displayName: username });

          const updatedUser = {
            ...user,
            displayName: username
          };
          setUser(updatedUser);
          window.location.hash = "#/";
        })
        .catch(error => setFirebaseError(error));
    } else {
      setFirebaseError({
        message: !isValidPassword ? "Passwords don't match!" : "Invalid email!"
      });
    }
  };

  return (
    <FirebaseContext.Consumer>
      {firebase => (
        <Container title="Sign Up">
          <div style={{ maxWidth: "300px", marginBottom: "16px" }}>
            Email <Input id="email_input" />
            Username <Input id="username_input" />
            Password <Input id="password_input" />
            Confirm Password <Input id="confirm_password_input" />
          </div>
          <Button
            onClick={() => onSubmitCredentials(firebase)}
            variant="primary"
          >
            Sign Up
          </Button>
          {firebaseError.message && (
            <div style={{ color: "red", marginTop: "1rem" }}>
              {firebaseError.message}
            </div>
          )}
        </Container>
      )}
    </FirebaseContext.Consumer>
  );
};

export default SignUp;
