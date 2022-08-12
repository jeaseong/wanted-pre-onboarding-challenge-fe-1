import React from "react";
import { AreaTypes } from "types/type";
import { Area } from "./TextArea.style";
const TextArea = ({ onChange, value, required }: AreaTypes) => {
  return <Area onChange={onChange} value={value} required={required} />;
};

export default TextArea;
