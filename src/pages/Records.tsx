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

const Records: React.FC = () => {
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
            <Text>
              <Icon icon="coin" />
              <Text style={{ marginLeft: "4px" }}>100,000,000</Text>
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
          <tbody>
            <tr>
              <td>1.</td>
              <td>Christian Rivera</td>
              <td>
                <Icon icon="coin" />
                <Text style={{ marginLeft: "4px" }}>100,000,000,000</Text>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Ben Burlingham</td>
              <td>
                <Icon icon="coin" />
                <Text style={{ marginLeft: "4px" }}>90,000,000,000</Text>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Amanda Bosson</td>
              <td>
                <Icon icon="coin" />
                <Text style={{ marginLeft: "4px" }}>80,000,000,000</Text>
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Matt Baum</td>
              <td>
                <Icon icon="coin" />
                <Text style={{ marginLeft: "4px" }}>70,000,000,000</Text>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Records;
