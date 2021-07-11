import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { toRem } from "../utils/style";
import { Image as ImageType } from "../types";
import { useSpring, animated } from "react-spring";

export enum TitlePosition {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export type MediaCardProps = {
  primaryTitle: string;
  primaryDescription: string;
  secondaryTitle: string;
  secondaryDescription: string;
  image: ImageType;
  titlePosition: TitlePosition;
};

export const MediaCard = ({
  primaryTitle,
  primaryDescription,
  secondaryTitle,
  secondaryDescription,
  image,
  titlePosition = TitlePosition.RIGHT,
}: MediaCardProps) => {
  const [isOpen, setOpen] = useState(false);
  const animation = useMemo(() => {
    if (titlePosition === TitlePosition.LEFT) {
      return {
        left: 0,
        opacity: isOpen ? 1 : 0,
        transform: `translateX(${isOpen ? 0 : isMobile ? -100 : -60}%)`,
      };
    }
    return {
      right: 0,
      opacity: isOpen ? 1 : 0,
      transform: `translateX(${isOpen ? 0 : isMobile ? 100 : 60}%)`,
    };
  }, [isOpen, titlePosition, isMobile]);
  const styles = useSpring(animation);

  const handleContentClick = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, [setOpen]);

  return (
    <Container titlePosition={titlePosition} onClick={handleContentClick}>
      <Image src={image?.src} alt={image?.alt} />
      <PrimaryContent>
        <Title vertical rotate={titlePosition === TitlePosition.LEFT}>
          {primaryTitle}
        </Title>
      </PrimaryContent>
      <SecondaryContent style={styles}>
        {isMobile && <Description>{primaryDescription}</Description>}
        <Title>{secondaryTitle}</Title>
        <Description>{secondaryDescription}</Description>
      </SecondaryContent>
    </Container>
  );
};

const Container = styled.div<{ titlePosition: TitlePosition }>`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: ${(props) =>
    props.titlePosition === TitlePosition.RIGHT ? "row" : "row-reverse"};
  // @media (min-width: 768px) {
  //   font-size: ${toRem(80)}rem;
  //   padding: 0 55px;
  // }
`;

const Image = styled.img`
  width: 87%;
  height: 100%;
  object-position: center;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

const Content = styled(animated.div)`
  width: 13%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 16px;
  @media (min-width: 768px) {
    width: 60%;
    padding: 43px;
  }
`;

const PrimaryContent = styled(Content)`
  background: #ffd500;
`;

const SecondaryContent = styled(Content)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #422774;
  color: #ffd500;
  @media (min-width: 768px) {
    width: 60%;
  }
`;

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

const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: ${toRem(17)}rem;

  @media (min-width: 768px) {
    font-size: ${toRem(20)}rem;
  }
`;

export default MediaCard;
