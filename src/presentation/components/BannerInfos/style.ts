import styled from "styled-components";

export const ContainerBannerInfos = styled.section`
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
