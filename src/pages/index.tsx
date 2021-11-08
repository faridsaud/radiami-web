import * as React from "react";
import Page from "../components/Page";
import Jumbotron from "../components/Jumbotron";
import { Shows } from "../components/Shows";
import News from "../components/News";

const IndexPage = () => {
  return (
    <Page>
      <Jumbotron />
      <Shows />
      <News />
    </Page>
  );
};

export default IndexPage;
