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
            const isClickable = hasQuestion && day <= today;

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

  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [lookupDate, setLookupDate] = React.useState("");
  const [wager, setWager] = React.useState(0);
  const [invalidWagerFlag, setInvalidWagerFlag] = React.useState(false);

  const handleKeydown = evt => {
    if (evt.keyCode === 27 && modalVisibility) {
      setModalVisibility(false);
    }
  };

  document.addEventListener("keydown", evt => handleKeydown(evt), false);

  const viewDate = selectedDate;

  const onDayClick = (e, firebase) => {
    setCorrect(false);

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

  const validateFinalJeopardyWager = wager => {
    if (wager < 0) {
      return false;
    }

    const isWithinAcceptableRange =
      record.total_score > 1000 ? wager <= record.total_score : wager <= 1000;

    return isWithinAcceptableRange;
  };

  const onSetFinalJeopardyWager = () => {
    setInvalidWagerFlag(false);
    const wagerInput = document.getElementById("final_jeopardy_wager_input");
    const wagerValue = parseInt(wagerInput.value, 10);

    const isValidWager = validateFinalJeopardyWager(wagerValue);

    if (isValidWager) {
      setWager(wagerValue);
    } else {
      setInvalidWagerFlag(true);
    }
  };

  const onSubmitResponse = firebase => {
    setCorrect(false);
    setIncorrect(false);

    const responseInput = document.getElementById("response_input");

    const responseValue = responseInput.value.toLowerCase();
    const pointValue = clueAndResponse.clue.value;
    const correctResponse = clueAndResponse.response.question.toLowerCase();

    const alternativeCorrectResponses = clueAndResponse.response.alternative_questions.toLowerCase();
    const isAlternativeCorrectResponse = alternativeCorrectResponses.includes(
      responseValue
    );

    const isCorrectResponse =
      responseValue === correctResponse || isAlternativeCorrectResponse;

    if (isCorrectResponse) {
      setCorrect(true);
      const points = wager !== 0 ? wager : pointValue;

      record.scores.push({
        [lookupDate]: points
      });

      record.total_score += points;

      setRecord(record);
      setWager(0);

      firebase.updatePlayerRecord(record, currentUser.uid);
    } else if (responseValue === "frogs" || responseValue === "Frogs") {
      window.location.hash = "#/frogs";
    } else {
      const pointsLost = 0 - wager;
      record.scores.push({
        [lookupDate]: pointsLost
      });

      record.total_score += pointsLost;
      setRecord(record);
      setWager(0);
      setIncorrect(true);
      firebase.updatePlayerRecord(record, currentUser.uid);
    }
  };

  const onClickShim = () => {
    setModalVisibility(false);
    setCorrect(false);
    setIncorrect(false);
    setWager(0);
    setClueAndResponse(defaultClueAndResponse);
  };

  const scoreForSelectedDate = record.scores.find(
    score => score[lookupDate] || score[lookupDate] === 0
  );
  const answeredCorrectly =
    scoreForSelectedDate && scoreForSelectedDate[lookupDate] > 0;

  const currentScore = record.total_score;
  const possibleWager = currentScore < 1000 ? 1000 : currentScore;

  return (
    <>
      {modalVisibility && (
        <Dialog onClickOutside={() => onClickShim()} rounded>
          <Container
            title={`${clueAndResponse.clue.category} - ${clueAndResponse.clue.value}`}
          >
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
                      paddingTop: "2rem",
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
                      You have{" "}
                      <Text variant={currentScore < 0 ? "error" : "primary"}>
                        {currentScore}
                      </Text>{" "}
                      points.
                    </div>
                    <div style={{ paddingBottom: "2rem" }}>
                      You can wager up to{" "}
                      <Text variant="primary">{possibleWager}</Text> points.
                    </div>
                    <Input
                      id="final_jeopardy_wager_input"
                      style={{ marginBottom: "1.5rem", maxWidth: "10rem" }}
                    />
                    <Button onClick={onSetFinalJeopardyWager} variant="warning">
                      Wager
                    </Button>
                    <div>
                      {invalidWagerFlag && (
                        <Text variant="error">
                          Your wager cannot be negative!
                        </Text>
                      )}
                    </div>
                  </div>
                )}
              {!scoreForSelectedDate &&
                (clueAndResponse.clue.jeopardy !== "FINAL" || wager !== 0) && (
                  <FirebaseContext.Consumer>
                    {firebase => (
                      <div
                        style={{
                          display: "inline-block",
                          paddingTop: "2rem",
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
                {(answeredCorrectly || correct) && (
                  <Text variant="success">Correct!</Text>
                )}
                {incorrect && answeredCorrectly === false && (
                  <Text variant="error">Incorrect :(</Text>
                )}
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
        Monthly total: <Icon icon="coin" /> {record.total_score}
      </div>
    </>
  );
};

export default Calendar;
