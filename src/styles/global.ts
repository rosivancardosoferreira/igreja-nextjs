import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --f-min: 0.75rem; //12px
    --f-smal: 0.875rem; //14px
    --f-normal: 1rem; //16px
    --f-media: 1.25rem; //20px
    --f-media-large: 2rem; //32px
    --f-extra-large: 3rem; //48px
    --max-width-desktop: calc(1216px + 72px * 2 );
    --max-width-tablet: calc(959px + 32px * 2 );
  }

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
  a {
    text-decoration: none;

  }

  /*
  font-family: "Montserrat", sans-serif;
  font-family: "Source Sans Pro", sans-serif;
  */

  body {
    background: #FFFFFF;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    #__next {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        display: grid;
        row-gap: 80px;
    }
  }
  .down {
    transition: all 0.3s;
    &:hover {
        transform: translateY(-2px);
    }
  }
  html {
    height: -webkit-fill-available;
  }

  .input__text,
  .input__text__area
   {
    width: 100%;
    color: ${props => props.theme.colors.grayDark};
    font-family: "Source Sans Pro", sans-serif;
    font-size: var(--f-smal);
    padding: 5px;

  }
  .input__text {
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.grayDark};
  }

  .input__text__area {
    border: 1px solid ${props => props.theme.colors.grayDark};
    resize: none;
    border-radius: 5px;
    height: 120px;
  }
`;
