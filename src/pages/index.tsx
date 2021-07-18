import * as React from "react";
import Page from "../components/Page";
import Jumbotron from "../components/Jumbotron";
import styled from "styled-components";
import { Shows } from "../components/Shows";
import ReactPlayer from "react-player";
import FacebookVideos from "../components/FacebookVideos";

const IndexPage = () => {
  return (
    <Page>
      <Jumbotron />
      <ReactPlayer url="https://www.facebook.com/lavozdesuamigo/videos/971531730306684/" />
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
