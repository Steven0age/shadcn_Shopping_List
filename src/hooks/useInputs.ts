import { useState, type ChangeEvent } from "react";

export default function useInputs() {
  const [value, setValue] = useState("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return {
    value,
    handleInputChange,
  };
}
