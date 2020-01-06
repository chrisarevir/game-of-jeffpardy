import React from "react";
import Container from "../components/Container";
import Calendar from "../components/Calendar";

import { FirebaseContext } from "../components/Firebase";

const Board = ({ currentUser, record, setRecord }) => (
  <FirebaseContext.Consumer>
    {firebase => {
      if (currentUser && !record.user_id) {
        firebase
          .getCurrentPlayerRecord(currentUser.uid)
          .then(currentRecord => setRecord(currentRecord));
      }

      return (
        record &&
        record.user_id && (
          <Container title="December">
            <Calendar
              currentUser={currentUser}
              record={record}
              setRecord={setRecord}
            />
          </Container>
        )
      );
    }}
  </FirebaseContext.Consumer>
);

export default Board;
