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
import Icon from "../components/Icon";
import Container from "../components/Container";
import { HashRouter as Router, Link, Route } from "react-router-dom";

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
  onDayClick: (
    event: React.MouseEvent<HTMLElement>,
    hasDailyRecord: boolean
  ) => void;
  record: any;
}> = ({ viewDate, onDayClick, record }) => {
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
            const formattedDay = day < 10 ? `0${day}` : day;
            let dailyRecord = "";

            if (day > 0) {
              dailyRecord = record[`2019-12-${formattedDay}`];
            }

            const hasDailyRecord = dailyRecord !== "";
            const isClickable = hasQuestion && day <= 14;
            return (
              <td key={`day-${day}-${dayIndex}`}>
                <Text
                  onClick={
                    isClickable ? e => onDayClick(e, hasDailyRecord) : undefined
                  }
                  variant={isClickable ? "primary" : "disabled"}
                >
                  {hasQuestion ? day : ""}
                </Text>
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

interface CalendarProps {
  record?: any;
  selectedDate?: Date;
}

const Calendar: React.FC<CalendarProps> = ({
  record = {},
  selectedDate = new Date()
}) => {
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [clueAndResponse, setClueAndResponse] = React.useState({
    clue: { category: "", text: "", value: 0 },
    response: ""
  });

  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [lookupDate, setLookupDate] = React.useState("");
  const [hasRecord, setHasRecord] = React.useState(false);

  const viewDate = selectedDate;

  const onDayClick = (e: React.MouseEvent, hasDailyRecord: boolean) => {
    setModalVisibility(true);
    setHasRecord(hasDailyRecord);

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

    const responseValue = responseInput.value.toLowerCase();
    const pointValue = clueAndResponse.clue.value;
    const correctResponse = clueAndResponse.response.toLowerCase();

    if (responseValue === correctResponse) {
      record[lookupDate] = pointValue;
      record.totalScore += pointValue;
      setCorrect(true);
    } else if (responseValue === "frogs" || responseValue === "Frogs") {
      window.location.hash = "#/frogs";
    } else {
      record[lookupDate] = 0;
      setIncorrect(true);
    }

    record.modified = true;
    localStorage.setItem("playerRecord", JSON.stringify(record));
    setTimeout(() => setModalVisibility(false), 3000);
  };

  const onClickShim = () => {
    setModalVisibility(false);
    setCorrect(false);
    setIncorrect(false);
  };

  const answeredCorrectly =
    record[lookupDate] == "100" || record[lookupDate] == "500";

  return (
    <>
      {modalVisibility && (
        <Dialog onClickOutside={() => onClickShim()} rounded>
          <Container title={clueAndResponse.clue.value.toString()}>
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              {clueAndResponse.clue.text}
              {!hasRecord && (
                <div style={{ display: "flex", padding: "3rem 1.5rem 0.5rem" }}>
                  <Input id="response_input" />
                  <Button onClick={onSubmitResponse} variant="primary">
                    Submit
                  </Button>
                </div>
              )}
              <div style={{ margin: "auto", paddingTop: "1rem" }}>
                {(correct || (hasRecord && answeredCorrectly)) && (
                  <Text variant="success">Correct!</Text>
                )}
                {incorrect && <Text variant="error">Incorrect :(</Text>}
              </div>
              {hasRecord && (
                <div style={{ margin: "auto", paddingTop: "1rem" }}>
                  <Text variant={answeredCorrectly ? "success" : "error"}>
                    {clueAndResponse.response}
                  </Text>
                </div>
              )}
            </div>
          </Container>
        </Dialog>
      )}
      <Table bordered dark centered style={{ width: "100%" }}>
        <Weekdays />
        <MonthBody
          viewDate={viewDate}
          onDayClick={onDayClick}
          record={record}
        />
      </Table>
      <div style={{ paddingTop: "1rem" }}>
        Monthly total: <Icon icon="coin" /> {record.totalScore}
      </div>
    </>
  );
};

export default Calendar;
