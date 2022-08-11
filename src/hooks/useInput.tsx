import React, { useState } from "react";
import Input from "components/atoms/input/Input";
import { debounce } from "utils/debounce";
import { InputTypes } from "types/type";

const useInput = ({
  type,
  types,
  required,
  disabled,
  placeholder,
}: InputTypes): [string, JSX.Element] => {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, 200);
  const input = (
    <Input
      type={type}
      types={types}
      onChange={handleOnChange}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
  return [inputValue, input];
};

export default useInput;
