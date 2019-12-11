import React from "react";
import { getWeeksInMonth } from "date-fns";

/* Calendar helper functions */

const getDays = week => {
  const days = [];

  for (var day = 1; day <= 7; day++) {
    days.push(<td key={`${week}-${day}`}>{week}00</td>);
  }

  return days;
};

export const getMonth = (categoryCell, selectedDate) => {
  const weeksInMonth = getWeeksInMonth(selectedDate);
  const month = [];

  for (var week = 1; week <= weeksInMonth; week++) {
    const days = getDays(week);

    month.push(
      <tr>
        {categoryCell}
        {days.map(day => day)}
      </tr>
    );
  }

  return month;
};
