import React from "react";

import {
  addDays,
  format,
  getDate,
  getDay,
  getDaysInMonth,
  getMonth,
  getWeeksInMonth,
  getYear,
  startOfMonth,
  startOfWeek
} from "date-fns";
import { Button, Container, Table, TextInput } from "nes-react";
import { range, splitEvery } from "ramda";

import { FirebaseContext } from "../components/Firebase";

import Dialog from "../components/Dialog";

import Text from "../components/Text";
import Icon from "../components/Icon";

import {
  defaultClueAndResponse,
  INVALID_WAGER_TYPES
} from "../utils/constants";

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
  setMonthTitle,
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
  const [invalidWagerFlag, setInvalidWagerFlag] = React.useState({ type: "" });
  const [emptyResponseValueFlag, setEmptyResponseValueFlag] = React.useState(
    false
  );

  const todayMonthKey = getMonth(selectedDate);
  const [viewDate, setViewDate] = React.useState(selectedDate);
  const [currentMonthKey, setCurrentMonthKey] = React.useState(todayMonthKey);

  const currentYear = getYear(new Date());

  const handleKeydown = evt => {
    if (evt.keyCode === 27 && modalVisibility) {
      setModalVisibility(false);
    }
  };

  document.addEventListener("keydown", evt => handleKeydown(evt), false);

  const onIncrementMonth = () => {
    const updatedMonthKey = currentMonthKey + 1;
    setCurrentMonthKey(updatedMonthKey);

    const updatedViewDate = new Date(currentYear, updatedMonthKey);
    setViewDate(updatedViewDate);

    const monthName = format(updatedViewDate, "MMMM");
    // not working?
    setMonthTitle(monthName);
  };

  // TODO: If you go January --> Febraury, then back to January, you can no longer click
  // the available days
  // You can also click the 1st day of any month for some reason
  // ------------------------------------------------------------------
  // don't let go before January 2020 or after December 2020 yet
  // ------------------------------------------------------------------
  const onDecrementMonth = () => {
    const updatedMonthKey = currentMonthKey - 1;
    setCurrentMonthKey(updatedMonthKey);
    setViewDate(new Date(currentYear, updatedMonthKey));
  };

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
      return "negative";
    }

    const isWithinAcceptableRange =
      record.total_score > 1000 ? wager <= record.total_score : wager <= 1000;

    if (isWithinAcceptableRange) {
      return "";
    } else if (wager > record.total_score && record.total_score > 1000) {
      return "too_high";
    } else {
      return "not_a_number";
    }
  };

  const onSetFinalJeopardyWager = () => {
    setInvalidWagerFlag({
      type: ""
    });

    const wagerInput = document.getElementById("final_jeopardy_wager_input");
    const wagerValue = parseInt(wagerInput.value, 10);

    const wagerType = validateFinalJeopardyWager(wagerValue);

    if (!wagerType) {
      setWager(wagerValue);
    } else {
      setInvalidWagerFlag({
        type: wagerType
      });
    }
  };

  const checkForQuestionFormat = responseValue => {
    const questionStarts = [
      "who is",
      "what is",
      "when is",
      "where is",
      "where are",
      "who are",
      "what are",
      "when are",
      "why is",
      "why are"
    ];

    let updatedValue = responseValue;

    questionStarts.forEach(start => {
      if (responseValue.includes(start)) {
        updatedValue = responseValue.replace(start, "").trim();
      }
    });

    return updatedValue;
  };

  const onSubmitResponse = firebase => {
    setCorrect(false);
    setIncorrect(false);

    const responseInput = document.getElementById("response_input");

    const responseValue = responseInput.value.trim().toLowerCase();

    if (responseValue.length > 0) {
      setEmptyResponseValueFlag(false);
      const pointValue = clueAndResponse.clue.value;
      const correctResponse = clueAndResponse.response.question.toLowerCase();

      const responseValueToCompare = checkForQuestionFormat(responseValue);

      const isMainCorrectResponse = correctResponse.includes(
        responseValueToCompare
      );

      const alternativeCorrectResponses = clueAndResponse.response.alternative_questions.toLowerCase();
      const isAlternativeCorrectResponse = alternativeCorrectResponses.includes(
        responseValue
      );

      const isCorrectResponse =
        isMainCorrectResponse || isAlternativeCorrectResponse;

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
    } else {
      setEmptyResponseValueFlag(true);
    }
  };

  const onClickShim = () => {
    setModalVisibility(false);
    setCorrect(false);
    setIncorrect(false);
    setWager(0);
    setEmptyResponseValueFlag(false);
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
                    <TextInput
                      id="final_jeopardy_wager_input"
                      style={{ marginBottom: "1.5rem" }}
                    />
                    <Button onClick={onSetFinalJeopardyWager} warning>
                      Wager
                    </Button>
                    <div>
                      {invalidWagerFlag.type && (
                        <Text variant="error">
                          {INVALID_WAGER_TYPES[invalidWagerFlag.type]}
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
                        <TextInput
                          id="response_input"
                          style={{ marginBottom: "1.5rem" }}
                        />
                        <Button
                          onClick={() => onSubmitResponse(firebase)}
                          primary
                        >
                          Submit
                        </Button>
                        <div style={{ paddingTop: "1rem" }}>
                          {emptyResponseValueFlag && (
                            <Text variant="error">
                              You cannot submit an empty response!
                            </Text>
                          )}
                        </div>
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
                    {clueAndResponse.response.alternative_questions && (
                      <div style={{ display: "block", textAlign: "center" }}>
                        ({clueAndResponse.response.alternative_questions})
                      </div>
                    )}
                  </Text>
                </div>
              )}
            </div>
          </Container>
        </Dialog>
      )}
      <div style={{ textAlign: "center", width: "800px" }}>
        <span
          onClick={() => onDecrementMonth()}
          style={{ display: "inline-block", verticalAlign: "middle" }}
        >
          L
        </span>
        <div
          style={{
            display: "inline-block",
            maxHeight: "500px",
            maxWidth: "700px",
            overflow: "hidden",
            padding: "4px"
          }}
        >
          <Table bordered dark centered className="clickable-table">
            <Weekdays />
            <MonthBody
              viewDate={viewDate}
              onDayClick={onDayClick}
              record={record}
            />
          </Table>
        </div>
        <span
          onClick={() => onIncrementMonth()}
          style={{ display: "inline-block", verticalAlign: "middle" }}
        >
          R
        </span>
      </div>
      <div style={{ paddingTop: "1rem" }}>
        Monthly total: <Icon icon="coin" /> {record.total_score}
      </div>
    </>
  );
};

export default Calendar;
