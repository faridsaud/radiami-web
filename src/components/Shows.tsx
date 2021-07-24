import React from "react";
import styled from "styled-components";
import { PaddedContent } from "./Shared";
import { BackgroundPosition, TitleCard } from "./TitleCard";
import { AnimatedCard, AnimatedCardProps } from "./AnimatedCard";
import ShowDemoImage from "../assets/show_demo.png";
import { TitlePosition } from "./MediaCard";

const SHOWS: AnimatedCardProps[] = [
  {
    primaryTitle: "Maxima Energia",
    primaryDescription: "Eadmin | Enero 23,2019",
    secondaryTitle: "Programa Musical",
    secondaryDescriptionLine1: "Lunes a Viernes",
    secondaryDescriptionLine2: "10h00 - 12h00",
    image: {
      src: ShowDemoImage,
      alt: "Maxima Energia",
    },
  },
  {
    primaryTitle: "Maxima Energia",
    primaryDescription: "Eadmin | Enero 23,2019",
    secondaryTitle: "Programa Musical",
    secondaryDescriptionLine1: "Lunes a Viernes",
    secondaryDescriptionLine2: "10h00 - 12h00",
    image: {
      src: ShowDemoImage,
      alt: "Maxima Energia",
    },
  },
];

export const Shows = () => {
  return (
    <PaddedContent>
      <TitleCard
        background={{ position: BackgroundPosition.TOP, color: "#422774" }}
      >
        Programas
      </TitleCard>
      <ShowsContainer>
        {SHOWS.map((show, index) => (
          <AnimatedCard
            key={index + show?.primaryTitle}
            {...show}
            titlePosition={
              index % 2 === 0 ? TitlePosition.RIGHT : TitlePosition.LEFT
            }
          />
        ))}
      </ShowsContainer>
      <Container />
    </PaddedContent>
  );
};

const ShowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 70px;
  @media (min-width: 768px) {
    padding-top: 50px;
  }
`;
const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

export default Shows;
