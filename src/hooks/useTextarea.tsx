import React from "react";
import { debounce } from "utils/debounce";

interface Props {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const useTextarea = ({ setValue }: Props) => {
  const handleOnChange = debounce(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    200
  );
  return handleOnChange;
};

export default useTextarea;
