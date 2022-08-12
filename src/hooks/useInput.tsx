import React from "react";
import { debounce } from "utils/debounce";

interface Props {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const useInput = ({ setValue }: Props) => {
  const handleOnChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, 200);

  return handleOnChange;
};

export default useInput;
