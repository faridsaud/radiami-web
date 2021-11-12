import React from "react";
import styled from "styled-components";
import { toRem } from "../utils/style";

export enum BackgroundPosition {
  TOP = "TOP",
  BOTTOM = "BOTTOM",
}

export enum TitlePosition {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

type TitleCardProps = {
  children: React.ReactNode;
  background?: {
    position: BackgroundPosition;
    color: string;
  };
  style?: any,
  title?: {
    position: TitlePosition;
  };
};

export const TitleCard = ({ style = {}, children, background, title }: TitleCardProps) => {
  return (
    <Container
      paddingTop={background?.position === BackgroundPosition.TOP}
      paddingBottom={background?.position === BackgroundPosition.BOTTOM}
      style={{
        ...style,
        justifyContent:
          title?.position === TitlePosition.RIGHT ? "flex-end" : "flex-start",
      }}
    >
      {background && <Background backgroundColor={background?.color} />}
      <Title>{children}</Title>
    </Container>
  );
};

const Title = styled.h2`
  z-index: 1;
  position: relative;
  font-family: "Open Sans", sans-serif;
  background-color: #ffffff;
  font-size: ${toRem(34)}rem;
  width: fit-content;
  padding: 0 30px;

  font-weight: 800;
  @media (min-width: 768px) {
    font-size: ${toRem(80)}rem;
    padding: 0 55px;
  }
`;

const Container = styled.div<{ paddingTop?: boolean; paddingBottom?: boolean }>`
  width: 100%;
  position: relative;
  background: transparent;
  display: flex;
  padding-top: ${(props) => (props?.paddingTop ? "46px" : "0")};
  padding-bottom: ${(props) => (props?.paddingBottom ? "46px" : "0")};
`;

const Background = styled.div<{ backgroundColor: string }>`
  height: 81px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
  background: ${(props) => props.backgroundColor};
  @media (min-width: 768px) {
    height: 133px;
  }
`;

export default TitleCard;
