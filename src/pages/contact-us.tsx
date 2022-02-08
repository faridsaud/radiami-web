import * as React from "react";
import Page from "../components/Page";
import styled from "styled-components";

const IndexPage = () => {
  return <Page >
    <Container/>
  </Page>;
};

const Container = styled.div`
  width: 100%;
  height: 75px;
  @media (min-width: 768px) {
    height: 85px;
  }
`;

export default IndexPage;
