import React from "react";
import styled from "styled-components";
import Header from "./Header";

type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

const Container = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  background: #e3e3e1;
`;

export default Page;
