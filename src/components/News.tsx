import React from "react";
import styled from "styled-components";

import { Timeline } from "react-twitter-widgets";
import InstagramEmbed from "react-instagram-embed";

import { PaddedContent } from "./Shared";
import { BackgroundPosition, TitleCard } from "./TitleCard";
import { TitlePosition } from "./MediaCard";

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
          <iframe
            src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flavozdesuamigo%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=${process.env.GATSBY_FACEBOOK_APP_ID}`}
            width="100%"
            height="600"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </FeedCard>
        <FeedCard>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "lavozdesuamigo",
            }}
            options={{
              width: "100%",
              height: "600px",
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
  padding-top: 70px;
  @media (min-width: 768px) {
    padding-top: 70px;
  }
`;

const FeedCard = styled.div`
  width: 400px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

const FacebookFeedCard = styled(FeedCard)``;

export default News;
