import React from "react";
// import styled from "styled-components";

import Dialog from "../components/Dialog";
import Table from "../components/Table";
import Text from "../components/Text";
import { getMonth } from "../utils/utils";

interface CalendarProps {
  selectedDate?: Date;
}

const Calendar = () => {
  const [visible, setVisible] = React.useState(false);

  const selectedDate = new Date();
  const month = getMonth(selectedDate, setVisible);

  const getDayOfWeek = (dayOfWeek: string) => (
    <th>
      <Text variant="primary">{dayOfWeek}</Text>
    </th>
  );

  return (
    <>
      {visible && (
        <Dialog>
          <p>This is going to be an example clue?</p>
        </Dialog>
      )}
      <Table bordered dark centered>
        <thead>
          <tr>
            {getDayOfWeek("Sunday")}
            {getDayOfWeek("Monday")}
            {getDayOfWeek("Tuesday")}
            {getDayOfWeek("Wednesday")}
            {getDayOfWeek("Thursday")}
            {getDayOfWeek("Friday")}
            {getDayOfWeek("Saturday")}
          </tr>
        </thead>
        <tbody>{month.map(week => week)}</tbody>
      </Table>
    </>
  );
};

export default Calendar;
