import React from "react";
import { Container } from "nes-react";

import { FirebaseContext } from "../components/Firebase";
import Calendar from "../components/Calendar";

const Board = ({ currentUser, record, setRecord }) => {
  const [monthTitle, setMonthTitle] = React.useState("January");
  return (
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
            <Container title="January" rounded>
              <Calendar
                currentUser={currentUser}
                record={record}
                setMonthTitle={setMonthTitle}
                setRecord={setRecord}
              />
            </Container>
          )
        );
      }}
    </FirebaseContext.Consumer>
  );
};

export default Board;
