import styled from "styled-components";
import { InputTypes } from "./types";

export const InputBox = styled.input<InputTypes>`
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;
