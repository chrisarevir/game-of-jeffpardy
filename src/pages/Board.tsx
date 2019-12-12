import React from "react";
import Container from "../components/Container";
import Calendar from "../components/Calendar";

interface BoardProps {
  record?: {};
}

const Board: React.FC<BoardProps> = ({ record }) => {
  return (
    <>
      <Container title="December">
        <Calendar record={record} />
      </Container>
    </>
  );
};

export default Board;
