import React from "react";

import { Container, Button } from "nes-react";
import { format } from "date-fns";

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
        <Container title="Admin" rounded>
          <Button onClick={() => populateDb(firebase)} warning>
            Populate DB
          </Button>
        </Container>
      )}
    </FirebaseContext.Consumer>
  );
};

export default Admin;
