import * as React from "react";
import Page from "../components/Page";
import Jumbotron from "../components/Jumbotron";
import styled from "styled-components";

const IndexPage = () => {
  return (
    <Page>
      <Jumbotron />
      <Container></Container>
    </Page>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

export default IndexPage;
