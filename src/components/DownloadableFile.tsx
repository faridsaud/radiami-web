import React from "react";
import styled from "styled-components";
import { FileIcon } from "react-file-icon";
import { toRem } from "../utils/style";

export enum TitlePosition {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export type DownloadableFileProps = {
  fileUrl: string;
  fileName: string;
};

export const DownloadableFile = ({
  fileUrl,
  fileName,
}: DownloadableFileProps) => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.download = fileName;
    link.href = fileUrl;
    link.click();
  };
  return (
    <Container onClick={handleClick}>
      <FileIcon extension={"pdf"} type={"document"} />
      <FileName>{fileName}</FileName>
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  padding: ${toRem(32)}rem;
  width: 100%;
  cursor: pointer;
  justify-content: center;
  align-content: center;
  gap: ${toRem(16)}rem;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

const FileName = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: ${toRem(28)}rem;
  text-align: center;
  width: 100%;
`;

export default DownloadableFile;
