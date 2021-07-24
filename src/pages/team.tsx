import * as React from "react";
import styled from "styled-components";
import Page from "../components/Page";
import Team from "../components/Team";

const IndexPage = () => {
  return (
    <Page>
      <Container />
      <Team />
    </Page>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

export default IndexPage;
