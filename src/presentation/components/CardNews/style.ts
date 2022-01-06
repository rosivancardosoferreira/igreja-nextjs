import styled from "styled-components";

export const ContainerCardNews = styled.article`
  width: 100%;
  border-radius: 5px;
  background: ${props => props.theme.colors.primaryWhite};
  box-shadow: 2px 0px 7px rgba(74, 63, 141, 0.25);
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card__title,
  .card__description,
  .card__footer {
    padding: 0 1rem;
  }

  .card__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  .card__title {
    color: ${props => props.theme.colors.blueBlack};
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: var(--f-normal);
    margin: 20px 0;
  }

  .card__description {
    color: ${props => props.theme.colors.grayDark};
    font-family: "Source Sans Pro", sans-serif;
    font-size: var(--f-smal);
    margin-bottom: 30px;
  }

  .card__footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .card__read__more,
    .card_content__date {
      display: flex;
      align-items: center;
      column-gap: 5px;
    }
    .card_content__date {
      .card__date {
        color: ${props => props.theme.colors.grayDarkSecondary};
        font-family: "Source Sans Pro", sans-serif;
        font-size: var(--f-smal);
      }
    }
    .card__read__more {
      color: ${props => props.theme.colors.blueDark};
      font-family: "Source Sans Pro", sans-serif;
      font-size: var(--f-smal);
      font-weight: 600;
    }
  }
`;
