import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf";
import { PaddedContent } from "./Shared";
import { BackgroundPosition, TitleCard } from "./TitleCard";
// @ts-ignore
import EthicsCodeFile from "../assets/ethics-code.pdf";

export const EthicsCode = () => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window?.innerWidth);
    }
  }, []);
  return (
    <PaddedContent>
      <TitleCard
        background={{ position: BackgroundPosition.TOP, color: "#422774" }}
      >
        Codigo Deontologico
      </TitleCard>
      <Container>
        <StyledDocument file={EthicsCodeFile} onLoadSuccess={() => {}}>
          <Page pageNumber={1} width={width} />
        </StyledDocument>
      </Container>
    </PaddedContent>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  padding: 70px 5px;
  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;

const StyledDocument = styled(Document)`
  width: 100%;
  canvas {
    width: 100% !important;
    height: auto !important;
  }
`;

export default EthicsCode;
