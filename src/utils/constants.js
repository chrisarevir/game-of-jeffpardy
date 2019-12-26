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

const clueAndResponseData = [
  {
    date: "01/01/20",
    category: "NINTENDO",
    value: 200,
    jeopardy: "SINGLE",
    text: "THIS PRINCESS IS NAMED AFTER A FRUIT",
    question: "PEACH",
    is_final: "NO",
    alternative_questions: "PRINCESS PEACH"
  },
  {
    date: "01/02/20",
    category: "NINTENDO",
    value: 600,
    jeopardy: "SINGLE",
    text: "A POPULAR MONSTER COLLECTING FRANCHISE ON NINTENDO PLATFORMS",
    question: "POKEMON",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/03/20",
    category: "NINTENDO",
    value: 1000,
    jeopardy: "SINGLE",
    text: "THE MOST RECENT HOME CONSOLE FROM NINTENDO",
    question: "SWITCH",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/04/20",
    category: "THE X-FILES",
    value: 400,
    jeopardy: "DOUBLE",
    text: "MULDER'S YOUNGER SISTER, WHO HE BELIEVE WAS ABDUCTED BY ALIENS",
    question: "SAMANTHA",
    is_final: "NO",
    alternative_questions: "SAMANTHA MULDER"
  },
  {
    date: "01/05/20",
    category: "THE X-FILES",
    value: 1200,
    jeopardy: "DOUBLE",
    text:
      "THE COLLECTIVE NAME OF MULDER'S THREE TECH AND CONSPIRACY-OBSESSED FRIENDS",
    question: "THE LONE GUNMEN",
    is_final: "NO",
    alternative_questions: "LONE GUNMEN"
  },
  {
    date: "01/06/20",
    category: "THE X-FILES",
    value: 2000,
    jeopardy: "DOUBLE",
    text: "THE FIRST EPISODE OF THE SHOW THAT AMANDA WATCHED",
    question: "BEYOND THE SEA",
    is_final: "NO",
    alternative_questions: ""
  },
  {
    date: "01/07/20",
    category: "ITALIAN FOOD",
    value: "FINAL",
    jeopardy: "FINAL",
    text: "THE BEST PASTA DISH OF ALL TIME",
    question: "LASAGNA",
    is_final: "YES",
    alternative_questions: ""
  }
];

export const defaultClueAndResponse = {
  clue: { category: "", date: "", jeopardy: "", text: "", value: 0 },
  response: { alternative_questions: "", date: "", question: "" }
};

export const getClueData = () => {
  const clues = clueAndResponseData.map(item => ({
    category: item.category,
    date: item.date,
    jeopardy: item.jeopardy,
    text: item.text,
    value: item.value
  }));

  return clues;
};

export const getResponseData = () => {
  const responses = clueAndResponseData.map(item => ({
    alternative_questions: item.alternative_questions,
    date: item.date,
    question: item.question
  }));

  return responses;
};
