import React from "react";
import { Container } from "nes-react";
import { format as formatter } from "date-fns";

import { FirebaseContext } from "../components/Firebase";
import Calendar from "../components/Calendar";

const Board = ({ currentUser, record, setRecord }) => {
  const [monthTitle, setMonthTitle] = React.useState("");

  React.useEffect(() => {
    const thisMonthDate = new Date();
    const monthString = formatter(thisMonthDate, "LLLL");

    setMonthTitle(monthString);
  }, []);

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
            <Container title={monthTitle} rounded>
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
