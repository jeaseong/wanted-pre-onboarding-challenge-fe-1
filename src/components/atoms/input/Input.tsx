import React from "react";
import { InputTypes } from "./types/index";
import { InputBox } from "./Input.style";

const Input = ({
  type,
  types,
  onChange,
  required,
  disabled = false,
  placeholder,
  value,
}: InputTypes) => {
  return (
    <InputBox
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      disabled={disabled}
      type={type}
      types={types}
    />
  );
};

export default React.memo(Input);
