import React from "react";
import styled from "styled-components";
import { toRem } from "../utils/style";
import { Image as ImageType } from "../types";
import { MediaCard, TitlePosition } from "./MediaCard";
import { MobileOnly, DesktopOnly } from "./Shared";

export type ShowCardProps = {
  primaryTitle: string;
  primaryDescription: string;
  secondaryTitle: string;
  secondaryDescriptionLine1: string;
  secondaryDescriptionLine2: string;
  image: ImageType;
  titlePosition?: TitlePosition;
};

export const ShowCard = ({
  primaryTitle,
  primaryDescription,
  secondaryTitle,
  secondaryDescriptionLine1,
  secondaryDescriptionLine2,
  image,
  titlePosition = TitlePosition.RIGHT,
}: ShowCardProps) => {
  return (
    <MediaCard
      defaultContent={
        <TextContainer>
          <Title vertical rotate={titlePosition === TitlePosition.LEFT}>
            {primaryTitle}
          </Title>
          <DesktopOnly>
            <Description>{primaryDescription}</Description>
          </DesktopOnly>
        </TextContainer>
      }
      clickedContent={
        <TextContainer>
          <MobileOnly>
            <SecondaryDescription>{primaryDescription}</SecondaryDescription>
          </MobileOnly>

          <SecondaryTitle>{secondaryTitle}</SecondaryTitle>
          <SecondaryDescription>
            {secondaryDescriptionLine1}
          </SecondaryDescription>
          <SecondaryDescription>
            {secondaryDescriptionLine2}
          </SecondaryDescription>
        </TextContainer>
      }
      image={image}
      titlePosition={titlePosition}
    />
  );
};

const Title = styled.p<{ rotate?: boolean; vertical?: boolean }>`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: ${toRem(17)}rem;
  text-orientation: ${(props) => (props.vertical ? "mixed" : "initial")};
  writing-mode: ${(props) => (props.vertical ? "vertical-rl" : "initial")};
  transform: ${(props) => (props.rotate ? "rotate(180deg)" : "none")};

  @media (min-width: 768px) {
    transform: none;
    text-orientation: initial;
    writing-mode: initial;
    font-size: ${toRem(34)}rem;
  }
`;

const SecondaryTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: ${toRem(28)}rem;

  @media (min-width: 768px) {
    font-size: ${toRem(34)}rem;
  }
`;

const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: ${toRem(17)}rem;

  @media (min-width: 768px) {
    font-size: ${toRem(20)}rem;
  }
`;

const SecondaryDescription = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: ${toRem(15)}rem;

  @media (min-width: 768px) {
    font-size: ${toRem(20)}rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  @media (min-width: 768px) {
    gap: 10px;
  }
`;

export default ShowCard;
