import React from "react";
import styled from "styled-components";
import { PaddedContent } from "./Shared";
import { BackgroundPosition, TitleCard } from "./TitleCard";
import { AnimatedCard, AnimatedCardProps } from "./AnimatedCard";
import ShowDemoImage from "../assets/show_demo.png";
import SoccerImage from "../assets/soccer.png";
import PublicImage from "../assets/public.png";
import EnergyImage from "../assets/energy.png";
import { TitlePosition } from "./MediaCard";

const SHOWS: AnimatedCardProps[] = [
  {
    primaryTitle: "MINUTO A MINUTO",
    primaryDescription: "6:00–7:30 / 12:00-12:30 / 17:30-18:30",
    secondaryTitle: "Noticiero",
    secondaryDescriptionLine1: "Lunes a Viernes",
    secondaryDescriptionLine2:  "6:00–7:30 / 12:00-12:30 / 17:30-18:30",
    image: {
      src: ShowDemoImage,
      alt: "Noticiero Minuto a Minuto",
    },
  },
  {
    primaryTitle: "OPINIÓN POPULAR",
    primaryDescription: "7:30-10:00",
    secondaryTitle: "Programa de Opinión",
    secondaryDescriptionLine1: "Lunes a Viernes",
    secondaryDescriptionLine2: "7:30-10:00",
    image: {
      src: PublicImage,
      alt: "Opinion Popular",
    },
  },
  {
    primaryTitle: "MAXIMA ENERGÍA",
    primaryDescription: "10:00-12:00",
    secondaryTitle: "Programa Musical",
    secondaryDescriptionLine1: "Lunes a Viernes",
    secondaryDescriptionLine2: "10:00-12:00",
    image: {
      src: EnergyImage,
      alt: "Maxima Energia",
    },
  },
  {
    primaryTitle: "VOZ DEL DEPORTE",
    primaryDescription: "12:30-13:30",
    secondaryTitle: "Programa Deportivo",
    secondaryDescriptionLine1: "Lunes a Viernes",
    secondaryDescriptionLine2: "12:30-13:30",
    image: {
      src: SoccerImage,
      alt: "VOZ DEL DEPORTE",
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
    </PaddedContent>
  );
};

const ShowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 70px;
  @media (min-width: 768px) {
    padding-top: 70px;
  }
`;

export default Shows;
