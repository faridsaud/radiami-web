import * as React from "react";
import Page from "../components/Page";
import Jumbotron from "../components/Jumbotron";
import styled from "styled-components";
import { Shows } from "../components/Shows";
import ReactPlayer from "react-player";
import FacebookVideos from "../components/FacebookVideos";
import News from "../components/News";

const IndexPage = () => {
  return (
    <Page>
      <Jumbotron />
      <ReactPlayer url="https://www.facebook.com/lavozdesuamigo/videos/971531730306684/" />
      <Shows />
      <News />
    </Page>
  );
};

export default IndexPage;
