import { FC } from "react";

import { StyledInputField } from "./InputField.styles";
import { InputProps } from "props/inputs";

export const InputField: FC<InputProps> = ({
  size = "large",
  type = "text",
  fullWidth = false,
  margin = false,
  name,
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
