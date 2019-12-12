import React from "react";
import {
  getDay,
  getDaysInMonth,
  getWeeksInMonth,
  startOfMonth
} from "date-fns";

/*
---------------------------
Calendar helper functions
---------------------------
*/

/* Returns the point value for the date */
const getDayValue = date => "100";

/* Returns an array of cells for each day of the week */
const getDayCells = (week, monthDays) => {
  const dayCells = [];
  // const dayValue(date) = getDayValue();

  const daysLeft = monthDays.slice(7 * week);

  for (var day = 0; day < 7; day++) {
    dayCells.push(<td key={`${week}-${day}`}>{daysLeft[day]}</td>);
  }

  return dayCells;
};

/* Returns an array of each day of the month with zeroes
preceding based on the first weekday of the month */
const getDays = selectedDate => {
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
export const getMonth = selectedDate => {
  const weeksInMonth = getWeeksInMonth(selectedDate);
  const days = getDays(selectedDate);
  const month = [];

  for (var week = 0; week < weeksInMonth; week++) {
    const dayCells = getDayCells(week, days);
    month.push(<tr>{dayCells.map(day => day)}</tr>);
  }

  return month;
};
