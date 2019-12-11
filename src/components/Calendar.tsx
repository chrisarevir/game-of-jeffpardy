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

  const categoryCell = (
    <td>
      <Text variant="primary">Category</Text>
    </td>
  );

  const month = getMonth(categoryCell, selectedDate);

  return (
    <Table bordered dark centered>
      <thead>
        <tr>
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
      </thead>
      <tbody>{month.map(week => week)}</tbody>
    </Table>
  );
};

export default Calendar;
