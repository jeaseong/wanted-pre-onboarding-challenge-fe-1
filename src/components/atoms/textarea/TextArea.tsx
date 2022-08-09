import React from "react";
import { AreaTypes } from "types/type";
import { Area } from "./TextArea.style";
const TextArea = ({ onChange, value }: AreaTypes) => {
  return <Area onChange={onChange} value={value} />;
};

export default TextArea;
