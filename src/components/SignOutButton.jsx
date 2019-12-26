import React from "react";
import Button from "./Button";

import { FirebaseContext } from "../components/Firebase";

const SignOutButton = () => {
  const onSignOut = firebase => {};

  return (
    <FirebaseContext.Consumer>
      {firebase => (
        <Button
          onClick={() => onSignOut(firebase)}
          style={{
            height: "2.5rem",
            marginLeft: "1.5rem",
            marginTop: "19rem"
          }}
          variant="error"
        >
          Sign Out
        </Button>
      )}
    </FirebaseContext.Consumer>
  );
};

export default SignOutButton;
