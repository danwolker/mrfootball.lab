// RadioColor.Style.ts
import { styled } from "styled-components";

interface RadioButtonProps {
  $buttoncolor: string;
}

export const RadioButtonColor = styled.input<RadioButtonProps>`
  appearance: none;
  border: 2px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 2.2rem;
  height: 2.2rem;
  background-image: ${(props) => props.$buttoncolor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, border 0.2s ease;

  &:hover {
    transform: scale(1.1);
    border-color: #555;
  }

  &:checked {
    border: 3px solid black;
  }

  @media screen and (max-width: 768px) {
    width: 1.8rem;
    height: 1.8rem;
  }
  

`;

export const BaseRadioButton = styled.input`
  appearance: none;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  position: relative;

  &:checked {
    border: 2px solid black;
    background-color: black;
  }

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 4px;
    width: 3px;
    height: 7px;
    border: 2px solid transparent;
    border-left: none;
    border-top: none;
    transform: rotate(45deg);
  }

  &:checked::before {
    border-color: white;
  }
`;
