import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Text from "../components/Text";
import Icon from "../components/Icon";
import Table from "../components/Table";

import { FirebaseContext } from "../components/Firebase";

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

const scoreSorter = (a, b) => b.totalScore - a.totalScore;

const ScoreBody = ({ records }) => {
  const ordered = records.sort(scoreSorter);

  return (
    <tbody>
      {ordered.map((record, index) => {
        return (
          <tr key={`record-${record.name}-${index}`}>
            <td>{`${index + 1}`}.</td>
            <td>{record.name}</td>
            <td>
              <Icon icon="coin" />
              <Text style={{ marginLeft: "4px" }}>{record.total_score}</Text>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

const Records = ({ currentUser, record, records, setRecord }) => {
  return (
    <FirebaseContext.Consumer>
      {firebase => {
        if (currentUser && !record.user_id) {
          firebase
            .getCurrentPlayerRecord(currentUser.uid)
            .then(currentRecord => setRecord(currentRecord));
        }

        return (
          record &&
          record.user_id && (
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
                    <Text>
                      <Icon icon="coin" />
                      <Text style={{ marginLeft: "4px" }}>
                        {record.total_score}
                      </Text>
                    </Text>
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
                  <ScoreBody record={record} records={records} />
                </Table>
              </Container>
            </>
          )
        );
      }}
    </FirebaseContext.Consumer>
  );
};

export default Records;
