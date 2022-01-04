import styled, { css } from "styled-components";

interface propsHeader {
  open: boolean;
}

const BGOpen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 0;
  opacity: 1;
`;

const BGClose = css`
  opacity: 0;
`;

export const HeaderContainer = styled.header<propsHeader>`
  width: 100%;
  background-color: ${props => props.theme.colors.primaryWhite};
  grid-area: full;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  font-family: "Source Sans Pro", sans-serif;
  .l-background {
    display: none;
  }
  .l-header {
    padding: 14px 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid red;
    .l-header__menu {
      display: none;
    }
    img {
    }
    .l-header__item_header {
      display: flex;
      gap: 30px;
      align-items: center;
      li {
        a {
          text-decoration: none;
          font-size: var(--f-normal);
          font-weight: 600;
          color: ${props => props.theme.colors.secondaryBlack};
          transition: all 0.3s;
          :after {
            content: "";
            width: 0px;
            height: 2px;
            border-radius: 50px;
            display: block;
            background-color: ${props => props.theme.colors.blueDark};
            transition: all 0.3s;
          }
          :hover {
            color: ${props => props.theme.colors.blueDark};
            :after {
              width: 100%;
            }
          }
        }
      }
    }
  }
  @media (min-width: calc(1216px + 72px * 2 )) {
    display: grid;
    grid-template-columns: var(--max-width-desktop);
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (max-width: 1023px) {
    .l-background {
      display: block;
      transition: all 0.2s;
      ${props => (props.open ? BGOpen : BGClose)};
    }
    .l-header {
      justify-content: flex-start;
      gap: 32px;
      padding: 14px 32px;
      .l-header__open {
        z-index: 2;
      }
      .l-header__item_header {
        display: none;
      }

      .l-header__menu {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 24px;
        height: 24px;
        cursor: pointer;
        transform: all 0.5s ease-in-out;
        box-sizing: border-box;

        .l-header__menu_burger,
        .l-header__menu_burger::before,
        .l-header__menu_burger::after {
          background-color: ${props => props.theme.colors.blueDark};
          transition: all 0.5s ease-in-out;
          height: 2px;
        }

        .l-header__menu_burger {
          width: 20px;
          margin-right: 3px;
        }

        .l-header__menu_burger::before,
        .l-header__menu_burger::after {
          background-color: ${props => props.theme.colors.blueDark};
          content: "";
          right: 3px;
          position: absolute;
          width: 20px;
        }
        .l-header__menu_burger::before {
          transform: translateY(-7px);
        }

        .l-header__menu_burger::after {
          transform: translateY(7px);
        }
      }
      .l-header__menu.l-header__open .l-header__menu_burger {
        transform: translateX(-50px);
        background-color: transparent;
        box-shadow: none;
      }

      .l-header__menu.l-header__open .l-header__menu_burger::before {
        transform: rotate(45deg) translate(35px, -35px);
        right: 0;
      }

      .l-header__menu.l-header__open .l-header__menu_burger::after {
        transform: rotate(-45deg) translate(35px, 35px);
        right: 0;
      }
    }
  }
`;
