import styled, { css } from "styled-components";

export const Section = styled.section`
  background-color: ${props => props.theme.colors.background};
  background: green;
`;

export const GridSection = css`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 32px;
    padding: 0 72px;
    max-width: var(--max-width-desktop);
  }
`;
