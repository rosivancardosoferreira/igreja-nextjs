import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --f-normal: 1rem;
    --max-width-desktop: calc(1216px + 72px * 2 );
  }

  * {
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  /*
  font-family: "Montserrat", sans-serif;
  font-family: "Source Sans Pro", sans-serif;
  */

  body {
    background: #fff;
    #__next {
      @media (min-width: calc(1216px + 72px * 2 )) {
        grid-template-areas:
        "full full full"
        ".    safe  ."
        "footer footer footer";
        grid-template-columns: 1fr var(--max-width-desktop) 1fr;
        display: grid;
      }
    }
  }
  .down {
    transition: all 0.3s;
    &:hover {
        transform: translateY(-2px);
    }
  }
`;
