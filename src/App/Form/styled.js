import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  background-color: hsl(102, 23%, 62%);
  padding: 20px 20px 0px 20px;
  border-radius: 15px;
  overflow-x: auto;
  box-shadow: #2c1b1b 0px 0px 35px 20px;
`;

export const Fieldset = styled.fieldset`
  border-radius: 15px;
  border-color: rgb(194, 162, 80);
  border-width: 5px;
`;

export const Legend = styled.legend`
  padding: 10px;
  font-size: x-large;
  font-style: italic;
  border: groove;
  border-width: 3px;
  border-radius: 15px;
  border-color: rgb(194, 162, 80);
`;

export const AdditionalInfo = styled.p`
  margin-top: 0px;
  font-size: x-small;

  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}
`;

export const Select = styled.select`
  background-color: rgb(189, 211, 187);
  border-radius: 10px;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(
    rgb(118, 118, 118),
    rgb(133, 133, 133)
  );
  border-image: initial;
  transition-duration: 600ms;

  &:hover {
    background-color: rgb(222, 238, 221);
  }
`;

export const AmountInput = styled.input`
  background-color: rgb(189, 211, 187);
  border-radius: 10px;
  padding: 5px;
  transition-duration: 600ms;

  &:hover {
    background-color: rgb(222, 238, 221);
  }
`;

export const Label = styled.span`
  margin-right: 5px;
  
  @media (max-width: 454px) {
    display: inline-block;
    margin: 5px;
  }
`;

export const Paragraph = styled.p`
  margin: 8px;
`;

export const Button = styled.button`
  background-color: hsl(43, 48%, 54%);
  border-radius: 15px;
  padding: 5px;
  transition-duration: 400ms;

  &:hover {
    background-color: hsl(43, 51%, 64%);
    transform: scale(1.1);
    transition-timing-function: ease-in-out;
  }
`;

export const Footer = styled.footer`
  font-size: small;
  padding: 20px 20px 10px 20px;
  text-align: bottom;
`;
