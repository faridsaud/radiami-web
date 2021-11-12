import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf";
import { DesktopOnly, MobileOnly, PaddedContent } from "./Shared";
import { BackgroundPosition, TitleCard } from "./TitleCard";
import { toRem } from "../utils/style";
// @ts-ignore

export const EthicsCode = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [width, setWidth] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleNextClick = () => {
    if (pageNumber === numPages) {
      return;
    }
    setPageNumber(pageNumber + 1);
  };

  const handlePrevClick = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber(pageNumber - 1);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "codigo-deontologico.pdf";
    link.href = "/ethics-code.pdf";
    link.click();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window?.innerWidth);
    }
  }, []);

  // console.log({width, pageNumber})

  return (
    <PaddedContent>
      <TitleCard
        background={{ position: BackgroundPosition.TOP, color: "#422774" }}
      >
        Codigo Deontologico
      </TitleCard>
      <Container>
        <StyledDocument
          file={"/ethics-code.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} width={width} />
        </StyledDocument>
        <DocumentActions>
          <DesktopOnly>
            <AlternateButton onClick={handleDownload}>
              Descargar
            </AlternateButton>
          </DesktopOnly>
          <Button onClick={handlePrevClick}>Anterior</Button>
          <PageNumber>{pageNumber}</PageNumber>
          <span>/</span>
          <PageNumber>{numPages}</PageNumber>
          <Button onClick={handleNextClick}>Siguiente</Button>
        </DocumentActions>
        <DocumentActions>
          <MobileOnly>
            <AlternateButton onClick={handleDownload}>
              Descargar
            </AlternateButton>
          </MobileOnly>
        </DocumentActions>
      </Container>
    </PaddedContent>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
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

const DocumentActions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0px 16px;
  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
    justify-content: flex-end;
  }
`;

const PageNumber = styled.div`
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: ${toRem(24)}rem;
  }
`;

const Button = styled.button`
  background: #422774;
  font-weight: 700;
  color: #ffffff;
  padding: 1rem;
  border: none;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: ${toRem(24)}rem;
  }
`;
const AlternateButton = styled(Button)`
  background: #ffd500;
  color: #000000;
`;

export default EthicsCode;
