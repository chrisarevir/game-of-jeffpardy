import { database } from "firebase";

export const defaultRecord = {
  "2019-12-01": "",
  "2019-12-02": "",
  "2019-12-03": "",
  "2019-12-04": "",
  "2019-12-05": "",
  "2019-12-06": "",
  "2019-12-07": "",
  "2019-12-08": "",
  "2019-12-09": "",
  "2019-12-10": "",
  "2019-12-11": "",
  "2019-12-12": "",
  "2019-12-13": "",
  "2019-12-14": "",
  modified: false,
  totalScore: 0
};

export const defaultPlayerRecord = {
  badges: [],
  months_won: 0,
  scores: [],
  total_score: 0,
  user_id: 0,
  weeks_won: 0
};

const databaseData = [];

export const defaultClueAndResponse = {
  clue: { category: "", date: "", jeopardy: "", text: "", value: 0 },
  response: { alternative_questions: "", date: "", question: "" }
};

export const getClueData = () => {
  const clues = databaseData.map(item => ({
    category: item.category,
    date: item.date,
    jeopardy: item.jeopardy,
    text: item.text,
    value: item.value
  }));

  return clues;
};

export const getResponseData = () => {
  const responses = databaseData.map(item => ({
    alternative_questions: item.alternative_questions,
    date: item.date,
    question: item.question
  }));

  return responses;
};

export const INVALID_WAGER_TYPES = {
  negative: "Your wager cannot be negative!",
  not_a_number: "Your wager must be a number!",
  too_high: "Your wager is too high!"
};
