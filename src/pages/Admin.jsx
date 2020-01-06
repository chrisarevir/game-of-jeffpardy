import React from "react";
import { format } from "date-fns";
import Container from "../components/Container";
import Button from "../components/Button";

import { FirebaseContext } from "../components/Firebase";
import { getClueData, getResponseData } from "../utils/constants";

const Admin = () => {
  const populateDb = firebase => {
    const clueData = getClueData();
    const responseData = getResponseData();

    clueData.forEach(clue => {
      const docId = format(new Date(clue.date), "yyyy-MM-dd");
      firebase.addClue(clue, docId);
    });

    responseData.forEach(response => {
      const docId = format(new Date(response.date), "yyyy-MM-dd");
      firebase.addResponse(response, docId);
    });
  };

  return (
    <FirebaseContext.Consumer>
      {firebase => (
        <Container title="Admin">
          <Button onClick={() => populateDb(firebase)} variant="warning">
            Populate DB
          </Button>
        </Container>
      )}
    </FirebaseContext.Consumer>
  );
};

export default Admin;
