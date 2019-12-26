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

import { FirebaseContext } from "../components/Firebase";

import Button from "../components/Button";
import Dialog from "../components/Dialog";
import Input from "../components/Input";
import Table from "../components/Table";
import Text from "../components/Text";
import Icon from "../components/Icon";
import Container from "../components/Container";

import { defaultClueAndResponse } from "../utils/constants";

export const getDayOfWeekLabel = day => {
  return format(addDays(startOfWeek(new Date()), day), "EEEEEE");
};

const Weekdays = () => {
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

const MonthBody = ({ viewDate, onDayClick, record }) => {
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
            /* TODO: fix isClickable logic so all days of the current
                month prior to today are clickable */
            const isClickable = hasQuestion && day <= 14;

            return (
              <FirebaseContext.Consumer key={Math.random()}>
                {firebase => (
                  <td
                    key={`day-${day}-${dayIndex}`}
                    onClick={
                      isClickable
                        ? e => onDayClick(e, firebase, hasDailyRecord)
                        : undefined
                    }
                  >
                    <Text variant={isClickable ? "primary" : "disabled"}>
                      {hasQuestion ? day : ""}
                    </Text>
                  </td>
                )}
              </FirebaseContext.Consumer>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

const Calendar = ({ record, setRecord, selectedDate = new Date() }) => {
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [clueAndResponse, setClueAndResponse] = React.useState(
    defaultClueAndResponse
  );

  const [incorrect, setIncorrect] = React.useState(false);
  const [lookupDate, setLookupDate] = React.useState("");
  const [hasRecord, setHasRecord] = React.useState(false);

  const viewDate = selectedDate;

  const onDayClick = (e, firebase, hasDailyRecord) => {
    setHasRecord(hasDailyRecord);

    const offset = parseInt(e.currentTarget.children[0].innerHTML, 10) - 1;
    const lookupKey = format(
      addDays(startOfMonth(viewDate), offset),
      "yyyy-MM-dd"
    );

    setLookupDate(lookupKey);

    const promises = [
      firebase.getClueForSelectedDay(lookupKey),
      firebase.getResponseForSelectedDay(lookupKey)
    ];

    //TODO: Why is it defaulting to 1. you already answered and 2. you answered incorrectly?

    Promise.all(promises).then(responses => {
      setClueAndResponse({
        clue: responses[0],
        response: responses[1]
      });
      setModalVisibility(true);
    });
  };

  const onSubmitResponse = () => {
    setIncorrect(false);

    const responseInput = document.getElementById("response_input");

    const responseValue = responseInput.value.toLowerCase();
    const pointValue = clueAndResponse.clue.value;
    const correctResponse = clueAndResponse.response.question.toLowerCase();

    if (responseValue === correctResponse) {
      record.scores.push({
        [lookupDate]: pointValue
      });
      record.total_score += pointValue;
      setRecord(record);
      // push changes to DB
      // do I need to call setRecord? Will that rerender? Is that a problem?
    } else if (responseValue === "frogs" || responseValue === "Frogs") {
      window.location.hash = "#/frogs";
    } else {
      record.scores.push({
        [lookupDate]: 0
      });
      setIncorrect(true);
    }

    setTimeout(() => setModalVisibility(false), 3000);
  };

  const onClickShim = () => {
    setModalVisibility(false);
    setIncorrect(false);
    setClueAndResponse(defaultClueAndResponse);
  };

  const scoreForSelectedDate = record.scores.find(score => score[lookupDate]);
  const answeredCorrectly =
    scoreForSelectedDate && scoreForSelectedDate[lookupDate] !== 0;

  return (
    <>
      {modalVisibility && (
        <Dialog onClickOutside={() => onClickShim()} rounded>
          <Container title={clueAndResponse.clue.category.toString()}>
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              {clueAndResponse.clue.text}
              {!scoreForSelectedDate && (
                <div style={{ display: "flex", padding: "3rem 1.5rem 0.5rem" }}>
                  <Input id="response_input" />
                  <Button onClick={onSubmitResponse} variant="primary">
                    Submit
                  </Button>
                </div>
              )}
              <div style={{ margin: "auto", paddingTop: "1rem" }}>
                {scoreForSelectedDate && answeredCorrectly && (
                  <Text variant="success">Correct!</Text>
                )}
                {incorrect && <Text variant="error">Incorrect :(</Text>}
              </div>
              {scoreForSelectedDate && (
                <div style={{ margin: "auto", paddingTop: "1rem" }}>
                  <Text variant={answeredCorrectly ? "success" : "error"}>
                    {clueAndResponse.response.question}
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
