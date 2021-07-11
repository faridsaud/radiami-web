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
  image: ImageType;
  titlePosition: TitlePosition;
  defaultContent: React.ReactNode;
  clickedContent: React.ReactNode;
};

export const MediaCard = ({
  defaultContent,
  clickedContent,
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
      <PrimaryContent>{defaultContent}</PrimaryContent>
      <SecondaryContent style={styles}>{clickedContent}</SecondaryContent>
    </Container>
  );
};

const Container = styled.div<{ titlePosition: TitlePosition }>`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  flex-direction: ${(props) =>
    props.titlePosition === TitlePosition.RIGHT ? "row" : "row-reverse"};
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

export default MediaCard;
