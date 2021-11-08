import React from "react";
import styled from "styled-components";
import { PaddedContent } from "./Shared";
import { BackgroundPosition, TitleCard } from "./TitleCard";
import { TitlePosition } from "./MediaCard";
import { AnimatedCard, AnimatedCardProps } from "./AnimatedCard";
import TeamMemberPhoto1 from "../assets/team.png";
import TeamMemberPhoto2 from "../assets/team_2.png";

const TEAM_MEMBERS: AnimatedCardProps[] = [
  {
    primaryTitle: "Carlos Saud",
    primaryDescription: "Fundador",
    secondaryDescriptionLine1:
      "La Radio Transmite desde la tierra mas linda del mundo Esmeraldas, Ecuador. Ciudad bendita, tierra verde, ciudad de rios, playas, clima calido, comida exquisita, ciudad donde siempre se quiere volver.",
    image: {
      src: TeamMemberPhoto1,
      alt: "Carlos Saud",
    },
  },
  {
    primaryTitle: "Monica Rolleri",
    primaryDescription: "Presidente",
    secondaryDescriptionLine1:
      "La Radio Transmite desde la tierra mas linda del mundo Esmeraldas, Ecuador. Ciudad bendita, tierra verde, ciudad de rios, playas, clima calido, comida exquisita, ciudad donde siempre se quiere volver.",
    image: {
      src: TeamMemberPhoto2,
      alt: "Monica Rolleri",
    },
  },
  {
    primaryTitle: "Carlos Saud",
    primaryDescription: "Fundador",
    secondaryDescriptionLine1:
      "La Radio Transmite desde la tierra mas linda del mundo Esmeraldas, Ecuador. Ciudad bendita, tierra verde, ciudad de rios, playas, clima calido, comida exquisita, ciudad donde siempre se quiere volver.",
    image: {
      src: TeamMemberPhoto1,
      alt: "Carlos Saud",
    },
  },
  {
    primaryTitle: "Carlos Saud",
    primaryDescription: "Fundador",
    secondaryDescriptionLine1:
      "La Radio Transmite desde la tierra mas linda del mundo Esmeraldas, Ecuador. Ciudad bendita, tierra verde, ciudad de rios, playas, clima calido, comida exquisita, ciudad donde siempre se quiere volver.",
    image: {
      src: TeamMemberPhoto1,
      alt: "Carlos Saud",
    },
  },
  {
    primaryTitle: "Carlos Saud",
    primaryDescription: "Fundador",
    secondaryDescriptionLine1:
      "La Radio Transmite desde la tierra mas linda del mundo Esmeraldas, Ecuador. Ciudad bendita, tierra verde, ciudad de rios, playas, clima calido, comida exquisita, ciudad donde siempre se quiere volver.",
    image: {
      src: TeamMemberPhoto1,
      alt: "Carlos Saud",
    },
  },
  {
    primaryTitle: "Carlos Saud",
    primaryDescription: "Fundador",
    secondaryDescriptionLine1:
      "La Radio Transmite desde la tierra mas linda del mundo Esmeraldas, Ecuador. Ciudad bendita, tierra verde, ciudad de rios, playas, clima calido, comida exquisita, ciudad donde siempre se quiere volver.",
    image: {
      src: TeamMemberPhoto1,
      alt: "Carlos Saud",
    },
  },
  {
    primaryTitle: "Carlos Saud",
    primaryDescription: "Fundador",
    secondaryDescriptionLine1:
      "La Radio Transmite desde la tierra mas linda del mundo Esmeraldas, Ecuador. Ciudad bendita, tierra verde, ciudad de rios, playas, clima calido, comida exquisita, ciudad donde siempre se quiere volver.",
    image: {
      src: TeamMemberPhoto1,
      alt: "Carlos Saud",
    },
  },
];

export const Team = () => {
  return (
    <PaddedContent>
      <TitleCard
        background={{ position: BackgroundPosition.TOP, color: "#422774" }}
      >
        Nuestro Equipo
      </TitleCard>
      <TeamMembers>
        {TEAM_MEMBERS.map((teamMember, index) => (
          <StyledAnimatedCard
            key={index + teamMember?.primaryTitle}
            {...teamMember}
            titlePosition={
              index % 2 === 0 ? TitlePosition.RIGHT : TitlePosition.LEFT
            }
          />
        ))}
      </TeamMembers>
    </PaddedContent>
  );
};

const TeamMembers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 70px;
  padding-bottom: 70px;
  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;

const StyledAnimatedCard = styled(AnimatedCard)`
  & img {
    @media (min-width: 768px) {
      max-height: 400px;
    }
  }
`;

export default Team;
