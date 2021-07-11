import React from "react";
import styled from "styled-components";
import { toRem } from "../utils/style";

type TitleCardProps = {
  children: React.ReactNode;
};

export const TitleCard = ({ children }: TitleCardProps) => {
  return <Title>{children}</Title>;
};

const Title = styled.h2`
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

export default TitleCard;
