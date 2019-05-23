import React from "react";
import styled, { css } from "styled-components";
import niceCake from "../images/nice-cake.jpeg";

const BackgroundImage = styled.img`
  margin: 0;
  width: 100%;
  height: 40vh;
  object-fit: cover;
`;

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <BackgroundImage alt={"nice cake"} src={niceCake} />
    </div>
  );
};

export default Home;
