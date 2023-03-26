import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  min-height: 380px;
  background-color: ${({ theme }) => theme.color.swampGreen};
  padding: 20px 20px 0px 20px;
  border-radius: 15px;
  overflow-x: auto;
  box-shadow: #2c1b1b 0px 0px 35px 20px;
`;

export const Fieldset = styled.fieldset`
  min-height: 300px;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.color.tussock};
  border-width: 5px;
`;

export const Legend = styled.legend`
  padding: 10px;
  font-size: x-large;
  font-style: italic;
  border: groove;
  border-width: 3px;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.color.tussock};
`;

export const AdditionalInfo = styled.p`
  margin-top: 0px;
  font-size: small;

  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}
`;

export const Select = styled.select`
  margin: 3px;
  background-color: ${({ theme }) => theme.color.paleLeaf};
  border-radius: 10px;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  transition: filter 400ms;

  &:hover {
    filter: brightness(115%);
  }
`;

export const AmountInput = styled.input`
  background-color: ${({ theme }) => theme.color.paleLeaf};
  border-radius: 10px;
  padding: 5px;
  margin: 3px;
  transition: filter 400ms;

  &:hover {
    filter: brightness(115%);
  }
`;

export const Label = styled.span`
  margin-right: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.maxMobileWidth}px) {
    display: inline-block;
    margin-bottom: 5px;
  }
`;

export const Paragraph = styled.p`
  margin: 8px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.tussock};
  border-radius: 15px;
  padding: 5px;
  transition: 400ms;

  &:hover {
    filter: brightness(125%);
    transform: scale(1.1);
    transition-timing-function: ease-in-out;
  }
`;

export const Footer = styled.footer`
  font-size: small;
  padding: 20px 20px 10px 20px;
  text-align: bottom;
`;

export const Loading = styled.p`
  color: ${({ theme }) => theme.color.finlandia};
`;

export const Failure = styled.p`
  color: ${({ theme }) => theme.color.cognac};
`;
