import React from "react";
import Calendar from "../components/Calendar";

interface BoardProps {
  record?: {};
}

const Board: React.FC<BoardProps> = ({ record }) => {
  return (
    <>
      <Calendar record={record} />
    </>
  );
};

export default Board;
