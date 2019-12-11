import React from "react";
import styled from "styled-components";
import { getWeeksInMonth } from "date-fns";

import Table from "../components/Table";

interface CalendarProps {
  currentDate?: Date;
}

const Calendar = () => {
  const selectedDate = new Date();
  const weeksInMonth = getWeeksInMonth(selectedDate);
  console.log({ weeksInMonth });
  return (
    <Table bordered dark centered>
      <thead>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>100</td>
          <td>100</td>
          <td>100</td>
          <td>100</td>
        </tr>
        <tr>
          <td>200</td>
          <td>200</td>
          <td>200</td>
          <td>200</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Calendar;
