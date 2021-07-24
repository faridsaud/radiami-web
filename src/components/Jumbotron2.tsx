import React, { useState } from "react";
import styled from "styled-components";
import LogoWithBackground from "../assets/logo_high_res.png";
import { toRem } from "../utils/style";

const Jumbotron = () => {
  return (
    <Container>
      <Logo src={LogoWithBackground} alt={"RADIAMI"} />
      <LogoTextBold>{`Radio`}</LogoTextBold>
      <LogoText>{`La voz de`}</LogoText>
      <LogoText>&nbsp;{`su amigo`}</LogoText>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

const Logo = styled.img`
  object-fit: contain;
  z-index: 3;
  width: 57%;
  height: auto;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-bottom: 70px;
    width: 400px;
    height: 400px;
    object-fit: contain;
  }
`;
const LogoTextBold = styled.h1`
  z-index: 3;
  font-family: "Amiri", sans-serif;
  font-weight: 700;

  color: #e1332b;
  text-align: center;
  font-size: ${toRem(80)}rem;
  line-height: ${toRem(40)}rem;
  letter-spacing: -0.03em;

  @media (min-width: 768px) {
    font-size: ${toRem(120)}rem;
    line-height: ${toRem(60)}rem;
  }
`;

const LogoText = styled.h1`
  z-index: 3;
  font-family: "Amiri", sans-serif;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: #442a6b;
  text-align: center;
  font-size: ${toRem(92)}rem;
  line-height: ${toRem(46)}rem;
  @media (min-width: 768px) {
    font-size: ${toRem(140)}rem;
    line-height: ${toRem(70)}rem;
  }
`;

export default Jumbotron;
