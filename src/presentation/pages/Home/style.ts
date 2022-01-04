import styled from "styled-components";
import { GridSection } from "styles/shared";

export const PresentationPage = styled.main`
  ${GridSection};
  grid-column: 2/3;
  h1 {
    grid-column: 1/7;
    color: ${props => props.theme.colors.primaryBlack};
    font-size: var(--f-extra-large);
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }
  p {
    grid-column: 1/6;
    margin-top: 30px;
    color: ${props => props.theme.colors.secondaryBlack};
    font-size: var(--f-media);
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
  }
  button {
    margin-top: 50px;
    grid-column: 1/4;
    width: fit-content;
  }

  img {
    grid-column: 8/13;
    grid-row: 1/5;
  }
`;

export const OhterPresentationPage = styled.main`
  /* ${GridSection}; */
  grid-column: 1/4;
`;

export const BannerInfosHome = styled.section`
  background-color: lightgreen;
  background: linear-gradient(2.74deg, #054cb8 -59.17%, #63d0d7 147.35%);
  grid-column: 1/4;
  div {
    max-width: var(--max-width-desktop);
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 47px 0;
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      svg {
        margin-bottom: 10px;
      }
      h2,
      p {
        color: ${props => props.theme.colors.primaryWhite};
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
      }
      h2 {
        font-size: var(--f-media-large);
      }
      p {
        font-size: var(--f-media);
      }
    }
  }
`;
