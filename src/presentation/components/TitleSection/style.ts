import styled from "styled-components";

export const ContainerTitleSection = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  h1 {
    color: ${props => props.theme.colors.secondaryBlack};
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: var(--f-media-large);
    text-align: center;
    width: fit-content;
    span {
      background-color: ${props => props.theme.colors.secondaryBlack};
      display: block;
      height: 5px;
      width: 70%;
      border-radius: 5px;
      margin: auto;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 1023px) {
    grid-column: 1 / 9;
  }
  @media screen and (min-width: 1024px) {
    grid-column: 1 / 13;
  }
`;
