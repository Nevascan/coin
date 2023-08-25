import { FC } from "react";

import { StyledInputField } from "./InputField.styles";
import { InputProps } from "props/inputs";

// Refatorar o codigo --
// Separar as props numa pasta --
// Separar o input normal do formulario
// Ver se consegue reaproveitar com ...props, ao inves de chamar todas

export const InputField: FC<InputProps> = ({
  name = "",
  size = "large",
  type = "text",
  fullWidth = false,
  margin = false,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <StyledInputField
      margin={margin}
      fullWidth={fullWidth}
      name={name}
      type={type}
      sizeType={size}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
