import React from "react";
// import styled from "styled-components";

import Table from "../components/Table";
import Text from "../components/Text";
import { getMonth } from "../utils/utils";

interface CalendarProps {
  selectedDate?: Date;
}

const Calendar = () => {
  const selectedDate = new Date();
  const month = getMonth(selectedDate);

  const getDayOfWeek = (dayOfWeek: string) => (
    <th>
      <Text variant="primary">{dayOfWeek}</Text>
    </th>
  );

  return (
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
  );
};

export default Calendar;
