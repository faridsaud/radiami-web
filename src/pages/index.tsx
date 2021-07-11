import * as React from "react";
import Page from "../components/Page";
import Jumbotron from "../components/Jumbotron";
import styled from "styled-components";
import { PaddedContent } from "../components/Shared";
import TitleCard from "../components/TitleCard";
import { Shows } from "../components/Shows";

const IndexPage = () => {
  return (
    <Page>
      <Jumbotron />
      <Shows />
      <Container></Container>
    </Page>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

export default IndexPage;
