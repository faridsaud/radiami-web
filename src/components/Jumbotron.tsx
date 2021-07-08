import React, { useState } from "react";
import styled from "styled-components";
import LogoWithBackground from "../assets/logo-background_2.png";

const Jumbotron = () => {
  return (
    <Container>
      <Content>
        <LargeImage src={LogoWithBackground} alt={"RADIAMI"} />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding-bottom: 170%;
  position: relative;
  @media (min-width: 768px) {
    width: 100%;
    padding-bottom: 70.8%;
  }
`;

const Content = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const LargeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (min-width: 768px) {
    object-fit: contain;
  }
`;

export default Jumbotron;
