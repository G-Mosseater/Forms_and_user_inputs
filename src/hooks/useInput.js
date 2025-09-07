import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState("");

  const valueIsValid = validationFn(enteredValue);

  const [didEdit, setDidEdit] = useState(false);

  function handleInputChange(e) {
    setEnteredValue(e.target.value);

    setDidEdit(false);
  }
  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
