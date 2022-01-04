import styled, { css } from "styled-components";

interface propsButton {
  typeBtn: "primary" | "secondary";
}

const BtnPrimary = css`
  background-color: ${props => props.theme.colors.blueDark};
  color: ${props => props.theme.colors.primaryWhite};
  font-size: var(--f-normal);
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  border: 2px solid ${props => props.theme.colors.blueDark};
  &:hover {
    background-color: transparent;
    color: ${props => props.theme.colors.blueDark};
    border: 2px solid ${props => props.theme.colors.blueDark};
  }
`;

export const ButtonContainer = styled.button<propsButton>`
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;
  ${props => props.typeBtn === "primary" && BtnPrimary}
`;
