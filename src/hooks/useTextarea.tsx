import React, { useState } from "react";
import TextArea from "components/atoms/textarea/TextArea";
import { debounce } from "utils/debounce";
import { AreaTypes } from "types/type";

const useTextarea = ({ required }: AreaTypes): [string, JSX.Element] => {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = debounce(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(e.target.value);
    },
    200
  );
  const input = <TextArea onChange={handleOnChange} required={required} />;
  return [inputValue, input];
};

export default useTextarea;
