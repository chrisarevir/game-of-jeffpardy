import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Text from "../components/Text";
import Icon from "../components/Icon";
import Table from "../components/Table";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const fakeRecords = [
  { name: "Christian Rivera", totalScore: 100000 },
  { name: "Ben Burlingham", totalScore: 90000 },
  { name: "Amanda Bosson", totalScore: 80000 },
  { name: "Matt Baum", totalScore: 70000 }
];

type RecordShape = { name: string; totalScore: number };

const scoreSorter = (a: RecordShape, b: RecordShape) =>
  b.totalScore - a.totalScore;

const ScoreBody: React.FC<{ records: RecordShape[] }> = ({ records }) => {
  const ordered = records.sort(scoreSorter);

  return (
    <tbody>
      {ordered.map((record, index) => {
        return (
          <tr>
            <td>{`${index + 1}`}.</td>
            <td>{record.name}</td>
            <td>
              <Icon icon="coin" />
              <Text style={{ marginLeft: "4px" }}>{record.totalScore}</Text>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

interface RecordsProps {
  record?: any;
}

const Records: React.FC<RecordsProps> = ({ record }) => {
  const records = fakeRecords.concat([
    {
      name: "You",
      totalScore: record.totalScore
    }
  ]);

  return (
    <>
      <Container title="Personal">
        <Column>
          <Row>
            <Text variant="success">Congratulations!</Text>
          </Row>
          <Row>
            <Text>You are a Jeffpardy... master?</Text>
          </Row>

          <Row style={{ marginTop: "24px" }}>
            Your Score:
            {record && (
              <Text>
                <Icon icon="coin" />
                <Text style={{ marginLeft: "4px" }}>{record.totalScore}</Text>
              </Text>
            )}
          </Row>
        </Column>
      </Container>

      <Container title="High Scores">
        <Table style={{ width: "100%" }} bordered centered>
          <thead>
            <tr>
              <th>Placement</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <ScoreBody records={records} />
        </Table>
      </Container>
    </>
  );
};

export default Records;
