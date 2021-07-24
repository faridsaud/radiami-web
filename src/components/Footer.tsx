import React, { useState } from "react";
import styled from "styled-components";
import TitleCard, { BackgroundPosition } from "./TitleCard";
import { Image } from "../types";
import { toRem } from "../utils/style";

type FooterSection = {};

type FooterProps = {};

const Footer = (props: FooterProps) => {
  return (
    <Container>
      <TitleCard
        background={{ position: BackgroundPosition.TOP, color: "#FFD500" }}
      >
        {"Contactenos"}
      </TitleCard>
      <Content>
        <Section>
          <SectionTitle>Encuentranos</SectionTitle>
          <SectionDescription>
            Av. Olmedo y Manuela Canizares esquina
            <br />
            Edificio Radiami
            <br />
            Esmeraldas
          </SectionDescription>
        </Section>
        <Section>
          <SectionTitle>Llamanos</SectionTitle>
          <SectionDescription>
            Cabina (06) 2720-499 / (06) 2721-834 <br />
            Secretaria (06) 2711-901 / (06) 2714-645
          </SectionDescription>
        </Section>
        <Section>
          <SectionTitle>Escribenos</SectionTitle>
          <SectionDescription>
            <a href="mailto:radiolavozdesuamigo@yahoo.es">
              radiolavozdesuamigo@yahoo.es
            </a>
          </SectionDescription>
        </Section>
      </Content>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;
  z-index: 4;
  & > * {
    z-index: 4;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 25px;
  padding: 40px 25px;
  @media (min-width: 768px) {
    grid-template-columns: 50% 50%;
    grid-column-gap: 15px;
    grid-row-gap: 25px;
    padding: 28px 74px;
  }
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
  @media (min-width: 768px) {
    gap: 9px;
  }
`;

const SectionTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: ${toRem(28)}rem;
  @media (min-width: 768px) {
    font-size: ${toRem(30)}rem;
  }
`;

const SectionDescription = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: ${toRem(16)}rem;
  line-height: ${toRem(32)}rem;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media (min-width: 768px) {
    font-size: ${toRem(20)}rem;
  }
`;

export default Footer;
