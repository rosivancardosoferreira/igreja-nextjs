import styled from "styled-components";
import { GridSection } from "styles/shared";

export const ContainerSendMessage = styled.section`
  ${GridSection}
  grid-column: 1 / 4;
  border: 1px solid red;
  .message__header {
    .message__title {
      color: ${props => props.theme.colors.secondaryBlack};
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: var(--f-media-large);
    }
    .message__line {
      background-color: ${props => props.theme.colors.secondaryBlack};
      display: block;
      height: 5px;
      width: 150px;
      border-radius: 5px;
      margin: 15px 0;
    }
    .message__description {
      color: ${props => props.theme.colors.secondaryBlack};
      font-family: "Source Sans Pro", sans-serif;
      font-size: var(--f-media-normal);
    }
  }

  .message__form {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    row-gap: 25px;

    .btn__send__message {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 0px) {
    .message__header,
    .message__form {
      grid-column: 1 / 9;
    }
  }

  @media screen and (min-width: 768px) {
    .message__header,
    .message__form {
      grid-column: 1 / 6;
    }
  }

  @media screen and (min-width: 1024px) {
    .message__header,
    .message__form {
      grid-column: 1 / 7;
    }
  }
`;
