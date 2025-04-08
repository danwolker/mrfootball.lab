import { styled } from "styled-components";

interface RadioButtonProps {
    buttoncolor: string;
}


export const RadioButton = styled.input<RadioButtonProps>`
  appearance: none;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 10px;
  background: ${props => props.buttoncolor};

  &:checked {
    border: 2px solid black;
  }
`;
