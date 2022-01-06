import styled from "styled-components";

export const ContainerPartners = styled.section`
  grid-column: 1 / 4;
  margin: 0 auto;
  width: 100%;
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

export const ContainerPartnersMap = styled.section`
  margin-top: 70px;
  display: grid;
  .partners__item {
    margin: 0 -1px -1px 0;
    border: 1px solid ${props => props.theme.colors.gray};
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;
    .partners__image {
      object-fit: cover;
    }
  }

  @media screen and (max-width: 767px) {
    .partners__item .partners__image {
      width: 100%;
    }
  }

  @media screen and (min-width: 0) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
