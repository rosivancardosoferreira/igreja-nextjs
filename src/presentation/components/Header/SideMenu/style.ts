import styled, { css } from "styled-components";

interface propsSideMenu {
  open: boolean;
}

const Open = css`
  padding-left: 32px;
  padding-right: 64px;
  z-index: 3;
`;

const Close = css`
  padding: 0;
  margin-left: -300px;
`;

export const ContainetAside = styled.aside<propsSideMenu>`
  background-color: lightblue;
  position: fixed;
  background-color: ${props => props.theme.colors.primaryWhite};
  height: 100vh;
  transition: all 0.5s;
  ${props => (props.open ? Open : Close)};
  padding-top: calc(60px + 20px);
  z-index: 2;
  .l-aside__item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: fit-content;
    li:first-child {
      margin-bottom: 20px;
    }
    li {
      a {
        display: flex;
        align-items: center;
        gap: 16px;
        text-decoration: none;
        font-size: var(--f-normal);
        font-weight: 600;
        color: ${props => props.theme.colors.secondaryBlack};
        transition: 0.3s;
      }
    }
  }

  @media (min-width: 1023px) {
    display: none;
  }
`;
