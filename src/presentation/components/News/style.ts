import styled from "styled-components";

export const ContainerNews = styled.section`
  grid-column: 1 / 4;
  margin: 0 auto;
  width: 100%;
  .btn__primary {
    margin: 0 auto;
    margin-top: 60px;
  }
  @media screen and (min-width: 0) {
    padding: 0 32px;
  }

  @media screen and (min-width: 768px) {
    max-width: var(--max-width-tablet);
  }

  @media screen and (min-width: 1024px) {
    max-width: var(--max-width-desktop);
    padding: 0 72px;
  }
`;

export const ContainerNewsMap = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;

  @media (min-width: 768px) {
    display: grid;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;
  }
`;
