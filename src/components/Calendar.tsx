import React from "react";
import Dialog from "../components/Dialog";
import Table from "../components/Table";
import Text from "../components/Text";
import {
  getDay,
  getDaysInMonth,
  getWeeksInMonth,
  startOfMonth
} from "date-fns";
import getClueAndReponse from "../utils/getClueAndReponse";

interface CalendarProps {
  selectedDate?: Date;
}

const Calendar = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const onClickClue = (day: number) => {
    setVisible(true);
    // get day data
  };

  /* Returns the point value for the date */
  // const getDayValue = (date: any) => "100";

  /* Returns an array of cells for each day of the week */
  const getDayCells = (week: number, monthDays: any, setVisible: any) => {
    const dayCells = [];
    // const dayValue(date) = getDayValue();

    const daysLeft = monthDays.slice(7 * week);

    for (var day = 0; day < 7; day++) {
      dayCells.push(
        <td key={`${week}-${day}`} onClick={() => onClickClue(daysLeft[day])}>
          {daysLeft[day]}
        </td>
      );
    }

    return dayCells;
  };

  /* Returns an array of each day of the month with zeroes
preceding based on the first weekday of the month */
  const getDays = (selectedDate: Date) => {
    const numberOfDaysInMonth = getDaysInMonth(selectedDate);
    const startDate = startOfMonth(selectedDate);
    const dayOfWeek = getDay(startDate);
    const offset = 0 + dayOfWeek;

    const days = [];

    for (var i = 0; i < numberOfDaysInMonth + offset; i++) {
      if (i < offset) {
        days.push("");
      } else {
        days.push(i - offset + 1);
      }
    }

    return days;
  };

  /* Returns an array of rows for each week in the month */
  const getMonth = (selectedDate: Date, setVisible: any) => {
    const weeksInMonth = getWeeksInMonth(selectedDate);
    const days = getDays(selectedDate);
    const month = [];

    for (var week = 0; week < weeksInMonth; week++) {
      const dayCells = getDayCells(week, days, setVisible);
      month.push(<tr>{dayCells.map(day => day)}</tr>);
    }

    return month;
  };

  const month = getMonth(selectedDate, setVisible);

  const getDayOfWeek = (dayOfWeek: string) => (
    <th>
      <Text variant="primary">{dayOfWeek}</Text>
    </th>
  );

  return (
    <>
      {visible && (
        <Dialog onClickOutside={() => setVisible(false)} rounded>
          {JSON.stringify(getClueAndReponse("2019-12-11"))}
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
