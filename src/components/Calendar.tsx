import {
  addDays,
  format,
  getDay,
  getDaysInMonth,
  getWeeksInMonth,
  startOfMonth,
  startOfWeek
} from "date-fns";
import { range, splitEvery } from "ramda";
import React from "react";

import Button from "../components/Button";
import Dialog from "../components/Dialog";
import getClueAndResponse from "../utils/getClueAndResponse";
import Input from "../components/Input";
import Table from "../components/Table";
import Text from "../components/Text";

export const getDayOfWeekLabel = (day: number) => {
  return format(addDays(startOfWeek(new Date()), day), "EEEEEE");
};

const Weekdays: React.FC = () => {
  return (
    <thead>
      <tr>
        {range(0, 7).map(day => {
          const label = getDayOfWeekLabel(day);

          return (
            <th key={`weekday-${label}`}>
              <Text>{label}</Text>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

const MonthBody: React.FC<{
  viewDate: Date;
  onDayClick: (event: React.MouseEvent<HTMLElement>) => void;
}> = ({ viewDate, onDayClick }) => {
  const daysInMonth = getDaysInMonth(viewDate);
  const weeksInMonth = getWeeksInMonth(viewDate);
  const offset = getDay(startOfMonth(viewDate));

  const days = range(1, daysInMonth + 1);

  let prefix = 0;
  while (prefix < offset) {
    days.unshift(0);
  }

  let suffix = days.length;

  while (suffix < weeksInMonth * 7) {
    suffix = days.push(0);
  }

  const rows = splitEvery(7, days);

  return (
    <tbody>
      {rows.map((row, index) => (
        <tr key={`week-${index + 1}`}>
          {row.map((day, dayIndex) => {
            const hasQuestion = Boolean(day);

            return (
              <td
                key={`day-${day}-${dayIndex}`}
                onClick={hasQuestion ? onDayClick : undefined}
              >
                {hasQuestion ? day : ""}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

interface CalendarProps {
  selectedDate?: Date;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate = new Date() }) => {
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [clueAndResponse, setClueAndResponse] = React.useState({
    clue: { category: "", text: "", value: 0 },
    response: {}
  });
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [lookupDate, setLookupDate] = React.useState("");
  // const [viewDate, setViewDate] = React.useState(selectedDate);

  const viewDate = selectedDate;

  const onDayClick = (e: React.MouseEvent) => {
    setModalVisibility(true);
    // TODO: Fetch day data
    const offset = parseInt(e.currentTarget.innerHTML, 10) - 1;
    const lookupKey = format(
      addDays(startOfMonth(viewDate), offset),
      "yyyy-MM-dd"
    );

    setLookupDate(lookupKey);
    setClueAndResponse(getClueAndResponse(lookupKey));
  };

  const onSubmitResponse = () => {
    setCorrect(false);
    setIncorrect(false);

    const responseInput = document.getElementById(
      "response_input"
    ) as HTMLInputElement;

    const responseValue = responseInput.value;
    const pointValue = clueAndResponse.clue.value;
    const correctResponse = clueAndResponse.response;

    const playerRecord = JSON.parse(
      localStorage.getItem("playerRecord") || "{}"
    );

    if (responseValue === correctResponse) {
      playerRecord[lookupDate] = pointValue;
      playerRecord.totalScore += pointValue;
      setCorrect(true);
    } else {
      playerRecord[lookupDate] = 0;
      setIncorrect(true);
    }

    playerRecord.modified = true;
    localStorage.setItem("playerRecord", JSON.stringify(playerRecord));
    setTimeout(() => setModalVisibility(false), 3000);
  };

  const onClickShim = () => {
    setModalVisibility(false);
    setCorrect(false);
    setIncorrect(false);
  };

  return (
    <>
      {modalVisibility && (
        <Dialog onClickOutside={() => onClickShim()} rounded>
          <div
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            {clueAndResponse.clue.text}
            <div style={{ display: "flex", padding: "3rem 1.5rem 0.5rem" }}>
              <Input id="response_input" />
              <Button onClick={onSubmitResponse} variant="primary">
                Submit
              </Button>
            </div>
            <div style={{ margin: "auto", paddingTop: "1rem" }}>
              {correct && <Text variant="success">Correct!</Text>}
              {incorrect && <Text variant="error">Incorrect :(</Text>}
            </div>
          </div>
        </Dialog>
      )}
      <Table bordered dark centered style={{ width: "100%" }}>
        <Weekdays />
        <MonthBody viewDate={viewDate} onDayClick={onDayClick} />
      </Table>
    </>
  );
};

export default Calendar;
