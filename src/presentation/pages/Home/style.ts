import styled from "styled-components";
import { GridSection } from "styles/shared";

export const PresentationPage = styled.main`
  grid-column: 1 / 4;
  ${GridSection};
  h1 {
    color: ${props => props.theme.colors.primaryBlack};
    font-size: var(--f-extra-large);
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }
  p {
    margin-top: 30px;
    color: ${props => props.theme.colors.secondaryBlack};
    font-size: var(--f-media);
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
  }
  button {
    margin-top: 50px;
    width: fit-content;
    grid-column: 1/5;
  }

  img {
    grid-row: 1/5;
    object-fit: cover;
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    h1,
    p,
    button {
      grid-column: 1/9;
    }
    img {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    h1 {
      grid-column: 1/6;
    }
    p {
      grid-column: 1/3;
    }
    img {
      grid-column: 6/9;
    }
  }
  @media screen and (min-width: 1024px) {
    h1 {
      grid-column: 1/8;
    }
    p {
      grid-column: 1/7;
    }
    img {
      grid-column: 8/13;
    }
  }
`;

export const OhterPresentationPage = styled.main`
  /* ${GridSection}; */
  grid-column: 1/4;
`;
