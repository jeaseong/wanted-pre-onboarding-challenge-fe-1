import styled from "styled-components";

export const Area = styled.textarea`
  width: 100%;
  margin-top: 4px;
  padding: 6px;
  line-height: 1.5;
  min-height: 300px;
  overflow: visible;
  resize: none;
  white-space: pre-wrap;
  &:focus {
    outline: none;
  }
`;
