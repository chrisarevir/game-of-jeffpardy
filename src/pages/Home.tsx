import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  & + & {
    margin-top: 24px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Home: React.FC = () => {
  return (
    <>
      <Column>
        <Row>Do you like Jeopardy!?</Row>

        <Row>
          Of course you do! Who doesn't love sitting on the couch and getting
          schooled in 17th century French poetry by a sofa salesman from Boise?
        </Row>

        <Row>
          If you enjoy trivia, friendly competition between coworkers, and daily
          obligations, Jeffpardy! is perfect for you.
        </Row>

        <Row>
          Based on the classic tear-away desk calendar model, Jeffpardy!
          presents you with a new question daily to test your most obscure
          knowledge.
        </Row>

        <Row>
          Did you know Fort Ligonier was built in southwest Pennsylvania to help
          the British capture France's Fort Duquesne, now known as the city of
          Pittsburgh?
        </Row>

        <Row>No?</Row>

        <Row>
          How about that gravlax is the word for the Swedish specialty of raw
          salmon cured with salt, sugar, and dill?
        </Row>

        <Row>Me neither!</Row>

        <Row>
          But there will be tons you do know and there's nothing more fun than
          clawing your way up a ladder of useless knowledge!
        </Row>

        <Row>But Tell Me About the Tech</Row>

        <Row style={{ display: "inline-flex" }}>
          Jeffpardy! is built in React using TypeScript and styled-components,
          with the super cool NES.css framework.
        </Row>

        <Row>
          <a href="https://nostalgic-css.github.io/NES.css/">Framework here!</a>
        </Row>

        <Row>
          Specifically, the team converted the NES.css framework to styled React
          components and tweaked them to fit the overall theme of the project.
          It was a blast to learn about the way styled components interact with
          one another and to combine an existing framework with custom styles
          for maximum Jeffpardy! pizazz.
        </Row>

        <Row>What's Already There?</Row>

        <Row>Jeffpardy! currently has three views:</Row>

        <Row>* A home page</Row>
        <Row>* A game board, styled as a monthly calendar</Row>
        <Row>* A leaderboard</Row>

        <Row>
          Clicking a valid day on the board will bring up a modal containing
          that day's clue and an input for typing in a response. If the response
          is correct, points will be added to personal monthly and yearly
          scores, which are displayed on the leaderboards so Procore employees
          can see how they're doing compared to their coworkers.
        </Row>

        <Row>What's Planned for the Future?</Row>

        <Row>User Profiles</Row>

        <Row>
          Set a user photo, write a little blurb about yourself, show off your
          score - basically a poor man's MySpace!
        </Row>

        <Row>Badges</Row>

        <Row>
          Did you get the top score for the month of January? Show it off with a
          slick "January 2020" champion badge on your profile.
        </Row>

        <Row>Final Jeopardy! Wagers</Row>

        <Row>
          To better emulate Jeopardy! we're working on allowing users to wager
          their hard-earned points from the year on Final Jeopardy questions
          (every Saturday's question counts as Final Jeopardy!).
        </Row>

        <Row>Where does the name "Jeffpardy!" come from?</Row>
      </Column>

      <iframe
        title="jeffpardy video"
        style={{ height: "500px", width: "800px", marginTop: "24px" }}
        src="https://www.youtube.com/embed/9g3--WYH8SY"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Home;
