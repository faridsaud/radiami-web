import React from "react";
import styled from "styled-components";

import { FacebookProvider, Page } from "react-facebook";
import { Timeline } from "react-twitter-widgets";

import { PaddedContent } from "./Shared";
import { BackgroundPosition, TitleCard } from "./TitleCard";
import { ShowCardProps } from "./ShowCard";
import ShowDemoImage from "../assets/show_demo.png";
import { TitlePosition } from "./MediaCard";

const SHOWS: ShowCardProps[] = [
  {
    primaryTitle: "Maxima Energia",
    primaryDescription: "Eadmin | Enero 23,2019",
    secondaryTitle: "Programa Musical",
    secondaryDescriptionLine1: "Lunes a Viernes",
    secondaryDescriptionLine2: "10h00 - 12h00",
    image: {
      src: ShowDemoImage,
      alt: "Maxima Energia",
    },
  },
  {
    primaryTitle: "Maxima Energia",
    primaryDescription: "Eadmin | Enero 23,2019",
    secondaryTitle: "Programa Musical",
    secondaryDescriptionLine1: "Lunes a Viernes",
    secondaryDescriptionLine2: "10h00 - 12h00",
    image: {
      src: ShowDemoImage,
      alt: "Maxima Energia",
    },
  },
];

export const News = () => {
  return (
    <PaddedContent>
      <TitleCard
        background={{ position: BackgroundPosition.TOP, color: "#422774" }}
        title={{ position: TitlePosition.RIGHT }}
      >
        Noticias
      </TitleCard>
      <FeedCards>
        <FeedCard>
          <FacebookProvider appId="406278154073477">
            <Page
              href="https://www.facebook.com/lavozdesuamigo"
              tabs="timeline"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </FacebookProvider>
        </FeedCard>
        <FeedCard>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "lavozdesuamigo",
            }}
            options={{
              width: "100%",
              autoHeight: true,
            }}
          />
        </FeedCard>
      </FeedCards>
    </PaddedContent>
  );
};

const ShowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 70px;
  @media (min-width: 768px) {
    padding-top: 50px;
  }
`;

const FeedCards = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FeedCard = styled.div`
  width: 30%;
  height: 40vh;
`;

export default News;
