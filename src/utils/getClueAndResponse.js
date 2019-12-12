import clues from "./clues";
import responses from "./responses";

function getClueAndResponse(day) {
  return {
    clue: clues[day],
    response: responses[day]
  };
}

export default getClueAndResponse;
