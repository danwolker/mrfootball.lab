import { styled } from "styled-components";

interface RadioButtonProps {
  buttoncolor: string;
}

export const RadioButtonColor = styled.input<RadioButtonProps>`
  appearance: none;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  gap: 10px;
  background: ${(props) => props.buttoncolor};
  text-align: center;
  line-height: 1.6;

  &:checked {
    border: 2px solid black;
  }
`;

export const BaseRadioButton = styled.input`
  appearance: none;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  gap: 10px;
  text-align: center;
  line-height: 1.6;
  position: relative;
  

  &:checked {
    border: 2px solid black;
    background-color: #0e72ae;
  }

  &::before {
    content:'';
    position: absolute;
    top: 3px;
    left: 7px;
    width: 4px;
    height: 9px;
    border: 2px solid transparent;
    border-left: none;
    border-top: none;
    transform: rotate(45deg);
  }

  &:checked:before {
    border-color: white;
  }
`;
