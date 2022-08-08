import React from "react";
import { InputTypes } from "types/type";
import { InputBox } from "./Input.style";

const Input = ({
  type,
  types,
  onChange,
  required,
  disabled = false,
  placeholder,
}: InputTypes) => {
  return (
    <InputBox
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      disabled={disabled}
      type={type}
      types={types}
    />
  );
};

export default Input;
