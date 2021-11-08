import React from "react";
import styled from "styled-components";
import { PaddedContent } from "./Shared";
import { BackgroundPosition, TitleCard } from "./TitleCard";
import { DownloadableFile, DownloadableFileProps } from "./DownloadableFile";
// @ts-ignore
import SampleFile from "../assets/sample.pdf";

const FINANCE_DOCS: DownloadableFileProps[] = [
  {
    fileName: "2021",
    fileUrl: SampleFile,
  },
  {
    fileName: "2021",
    fileUrl: SampleFile,
  },
  {
    fileName: "2021",
    fileUrl: SampleFile,
  },
  {
    fileName: "2021",
    fileUrl: SampleFile,
  },
  {
    fileName: "2021",
    fileUrl: SampleFile,
  },
  {
    fileName: "2021",
    fileUrl: SampleFile,
  },
];

export const Team = () => {
  return (
    <PaddedContent>
      <TitleCard
        background={{ position: BackgroundPosition.TOP, color: "#422774" }}
      >
        Rendicion de Cuentas
      </TitleCard>
      <Container>
        {FINANCE_DOCS.map((doc, index) => (
          <DownloadableFile key={index + doc?.fileName} {...doc} />
        ))}
      </Container>
    </PaddedContent>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  padding: 70px;
  @media (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;

export default Team;
