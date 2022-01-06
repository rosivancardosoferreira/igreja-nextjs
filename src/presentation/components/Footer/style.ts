import styled from "styled-components";
export const ContainerFooter = styled.section`
  grid-column: 1 / 4;
  .container__footer_infos {
    background-color: ${props => props.theme.colors.grayDarkTertiary};
  }
  .container__footer__copyright {
    background-color: ${props => props.theme.colors.primaryBlack};
  }

  .footer__infos {
    padding: 50px 0;
    margin: 0 auto;
    display: flex;
    .footer__infos__title {
      color: ${props => props.theme.colors.primaryWhite};
      font-family: "Source Sans Pro", sans-serif;
      font-size: var(--f-normal);
      font-weight: 600;
    }

    .footer__infos__contacts {
      .footer__infos__datas {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        li {
          a {
            color: ${props => props.theme.colors.primaryWhite};
            font-family: "Source Sans Pro", sans-serif;
            font-size: var(--f-normal);
            display: flex;
            align-items: center;
            column-gap: 15px;
            svg {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
    }

    .footer__infos__social_networks {
      .footer__infos__datas__social {
        margin-top: 25px;
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        align-items: center;
      }
      li a svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  .footer__copyright {
    padding: 25px 0;
    display: flex;
    justify-content: center;
    .footer__text__copyright {
      color: ${props => props.theme.colors.grayPrimary};
      font-family: "Source Sans Pro", sans-serif;
      font-size: var(--f-smal);
    }
  }

  @media screen and (max-width: 767px) {
    .footer__infos {
      display: flex;
      flex-direction: column;
      padding-left: 32px;
      padding-right: 32px;
      row-gap: 50px;
    }
  }

  @media screen and (min-width: 768px) {
    .footer__infos {
      justify-content: space-between;
      padding-left: 32px;
      padding-right: 32px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: var(--max-width-tablet);
  }

  @media (min-width: 1024px) {
    .footer__infos {
      max-width: var(--max-width-desktop);
      padding-left: 72px;
      padding-right: 72px;
    }
  }
`;
