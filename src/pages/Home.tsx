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
      <div style={{ display: "block", textAlign: "center" }}>
        <img
          src="https://i.imgur.com/kKKFwOh.gif"
          style={{ marginTop: "10rem" }}
        />
      </div>

      {/* <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        src="https://www.youtube.com/embed/9g3--WYH8SY"
        style={{ height: "500px", width: "800px", marginTop: "24px" }}
        title="jeffpardy video"
      ></iframe> */}
    </>
  );
};

export default Home;
