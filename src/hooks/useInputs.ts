import { useState, type ChangeEvent } from "react";

export default function useInputs() {
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleIsCheckedChange() {
    switch (isChecked) {
      case true:
        {
          setIsChecked(false);
        }
        break;
      case false:
        {
          setIsChecked(true);
        }
        break;
      default:
        setIsChecked(false);
    }
  }

  return {
    value,
    handleInputChange,
    isChecked,
    handleIsCheckedChange,
  };
}
