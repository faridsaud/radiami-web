import React from "react";
import styled from "styled-components";
import { PaddedContent } from "./Shared";
import { TitleCard } from "./TitleCard";
import { MediaCard, MediaCardProps, TitlePosition } from "./MediaCard";
import ShowDemoImage from "../assets/show_demo.png";

const SHOWS: MediaCardProps[] = [
  {
    primaryTitle: "Maxima Energia",
    primaryDescription: "Eadmin | Enero 23,2019",
    image: {
      src: ShowDemoImage,
      alt: "Maxima Energia",
    },
  },
  {
    primaryTitle: "Maxima Energia",
    image: {
      src: ShowDemoImage,
      alt: "Maxima Energia",
    },
  },
];

export const Shows = () => {
  return (
    <PaddedContent>
      <TitleCard>Programas</TitleCard>
      <ShowsContainer>
        {SHOWS.map((show, index) => (
          <MediaCard
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
    padding-top: 50px;
  }
`;

export default Shows;
