import {
  addDays,
  format,
  getDate,
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
    prefix++;
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
            const today = getDate(viewDate);
            // const isClickable = hasQuestion && day <= today;
            const isClickable = hasQuestion && day <= 7;

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

const Calendar = ({
  currentUser,
  record,
  setRecord,
  selectedDate = new Date()
}) => {
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const [clueAndResponse, setClueAndResponse] = React.useState(
    defaultClueAndResponse
  );

  const [incorrect, setIncorrect] = React.useState(false);
  const [lookupDate, setLookupDate] = React.useState("");
  const [wager, setWager] = React.useState(0);

  const viewDate = selectedDate;

  const onDayClick = (e, firebase) => {
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

    Promise.all(promises).then(responses => {
      setClueAndResponse({
        clue: responses[0],
        response: responses[1]
      });

      setModalVisibility(true);
    });
  };

  const onValidateFinalJeopardyWager = wager => {
    const isWithinTotalScoreRange = wager <= record.total_score;

    // let them wager 1000 if under 1000 or 0 or negative
    // if (!isWithinTotalScoreRange && record.total_score <= 1000 && wager <= 1000)
    // const isValidFinalJeopardyWager = isWithinTotalScoreRange ||
  };

  const onSetFinalJeopardyWager = () => {
    const wagerInput = document.getElementById("final_jeopardy_wager_input");
    const wagerValue = parseInt(wagerInput.value, 10);
    setWager(wagerValue);
  };

  const onSubmitResponse = firebase => {
    setIncorrect(false);

    const responseInput = document.getElementById("response_input");

    const responseValue = responseInput.value.toLowerCase();
    const pointValue = clueAndResponse.clue.value;
    const correctResponse = clueAndResponse.response.question.toLowerCase();

    if (responseValue === correctResponse) {
      const points = wager !== 0 ? wager * 2 : pointValue;

      record.scores.push({
        [lookupDate]: points
      });

      record.total_score += points;

      setRecord(record);
      setWager(0);

      firebase.updatePlayerRecord(record, currentUser.uid).then(response => {
        setTimeout(() => setModalVisibility(false), 3000);
      });
    } else if (responseValue === "frogs" || responseValue === "Frogs") {
      window.location.hash = "#/frogs";
    } else {
      //TODO: account for negative points after losing a wager
      const pointsLost = wager !== 0 ? wager : 0;
      record.scores.push({
        [lookupDate]: wager
      });

      record.total_score -= pointsLost;
      setRecord(record);
      setWager(0);
      setIncorrect(true);
      firebase.updatePlayerRecord(record, currentUser.uid).then(response => {
        setTimeout(() => setModalVisibility(false), 2000);
      });
    }
  };

  const onClickShim = () => {
    setModalVisibility(false);
    setIncorrect(false);
    setWager(0);
    setClueAndResponse(defaultClueAndResponse);
  };

  console.log("record.scores", record.scores);
  console.log({ lookupDate });
  const scoreForSelectedDate = record.scores.find(
    score => score[lookupDate] || score[lookupDate] === 0
  );
  const answeredCorrectly =
    scoreForSelectedDate && scoreForSelectedDate[lookupDate] !== 0;

  console.log("score for selected date", scoreForSelectedDate, { record });

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
              {clueAndResponse.clue.jeopardy === "FINAL" &&
                !wager &&
                !scoreForSelectedDate && (
                  <div
                    style={{
                      display: "inline-block",
                      paddingTop: "3rem",
                      textAlign: "center"
                    }}
                  >
                    <Text
                      style={{ display: "block", paddingBottom: "1rem" }}
                      variant="warning"
                    >
                      Final Jeopardy!
                    </Text>
                    <div style={{ paddingBottom: "1rem" }}>
                      You can wager up to{" "}
                      <Text variant="primary">{record.total_score}</Text>{" "}
                      points.
                    </div>
                    <Input
                      id="final_jeopardy_wager_input"
                      style={{ marginBottom: "1.5rem", maxWidth: "10rem" }}
                    />
                    <Button onClick={onSetFinalJeopardyWager} variant="warning">
                      Wager
                    </Button>
                  </div>
                )}
              {!scoreForSelectedDate &&
                (clueAndResponse.clue.jeopardy !== "FINAL" || wager !== 0) && (
                  <FirebaseContext.Consumer>
                    {firebase => (
                      <div
                        style={{
                          display: "inline-block",
                          paddingTop: "3rem",
                          textAlign: "center"
                        }}
                      >
                        {wager !== 0 && (
                          <div style={{ paddingBottom: "1rem" }}>
                            Your wager: <Text variant="primary">{wager}</Text>
                          </div>
                        )}
                        <Input
                          id="response_input"
                          style={{ marginBottom: "1.5rem" }}
                        />
                        <Button
                          onClick={() => onSubmitResponse(firebase)}
                          variant="primary"
                        >
                          Submit
                        </Button>
                      </div>
                    )}
                  </FirebaseContext.Consumer>
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
