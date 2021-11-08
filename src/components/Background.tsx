import React from "react";
import styled from "styled-components";
import ConsoleBackground from "../assets/console.jpg";

export const TitleCard = () => {
  return (
    <Container>
      <BackgroundImage />
      <BackgroundImageGradient />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const BackgroundImageGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    rgba(227, 227, 225, 1),
    rgba(227, 227, 225, 0.75),
    rgba(227, 227, 225, 0)
  );
  background-size: cover;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${ConsoleBackground});
  background-size: cover;
  opacity: 0.3;
`;

export default TitleCard;
