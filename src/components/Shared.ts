import styled from "styled-components";

export const PaddedContent = styled.div`
  width: 100%;
  background: transparent;
  @media (min-width: 768px) {
    max-width: 1440px;
    margin: auto;
  }
`;

export const MobileOnly = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopOnly = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
`;
