import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";

type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <Container>
      <Header />
      <Background />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

const Container = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #e3e3e1;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  @media (min-width: 768px) {
    gap: 120px;
  }
  & * {
    z-index: 1;
  }
`;

export default Page;
