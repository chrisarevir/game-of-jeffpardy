import clues from "./clues";
import responses from "./responses";

function getClueAndReponse(day) {
  return {
    clue: clues[day],
    response: responses[day]
  };
}

export default getClueAndReponse;
