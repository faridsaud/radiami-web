import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PaddedContent } from "./Shared";
import { BackgroundPosition, TitleCard } from "./TitleCard";
import RadioHost from "../assets/radio-host.jpeg";
// @ts-ignore

export const About = () => {
  return (
    <PaddedContent>
      <TitleCard
        style={{zIndex: 1}}
        background={{ position: BackgroundPosition.TOP, color: "#422774" }}
      >
        Quienes Somos
      </TitleCard>
      <Container>
        <Image src={RadioHost} alt={"radio host"} />
        <TextContainer>
          <Title>Mision</Title>
          <Description>
            Radio La Voz de su Amigo, es una radio incluyente y al servicio de
            la comunidad de Esmeraldas, Atacames, Rio Verde y Muisne, que oferta
            una variada programacion que informa, educa y entretiene, que
            permite al ciudadano proyectar sus emprendimientos e iniciativas en
            un ambiente de seguridad y confianza, respetando el marco juridico
            vigente y trabajando conjuntamente con la ciudadania con el fin de
            alcanzar el bienestar general.{" "}
          </Description>
          <br />
          <br />

          <Title>Vision</Title>
          <Description>
            Radio La Voz de su Amigo, es una radio incluyente y al servicio de
            la comunidad de Esmeraldas, Atacames, Rio Verde y Muisne, que oferta
            una variada programacion que informa, educa y entretiene, que
            permite al ciudadano proyectar sus emprendimientos e iniciativas en
            un ambiente de seguridad y confianza, respetando el marco juridico
            vigente y trabajando conjuntamente con la ciudadania con el fin de
            alcanzar el bienestar general.
          </Description>
        </TextContainer>
      </Container>
    </PaddedContent>
  );
};

const Container = styled.div`
  position: relative;
  max-width: 1300px;
  margin: auto;
  background: #ffffff;
  z-index: 0;
  @media (min-width: 768px) {
    background: transparent;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 100%;
  padding: 40px 25px 60px;
  @media (min-width: 768px) {
    margin: 40px 0 40px 30%;
    padding: 75px 35px;
    max-width: 70%;
  }
`;


const Title = styled.h2`
  font-weight: 900;
  font-size: 34px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  top: -15px;
  @media (min-width: 768px) {
    position: absolute;
    max-width: 30%;
    left: 2%;
    width: auto;
    height: 110%;
    top: -5%;
    object-fit: cover;
  }
  @media (min-width: 1200px) {
    max-width: 30%;
    width: auto;
    height: 110%;
    top: -5%;
    object-fit: cover;
  }
`;

export default About;
