import { FC } from "react";
import { StyledInputField } from "./InputField.styles";

type InputFieldProps = {
  size?: string;
  type?: string;
  value: string;
  name: string;
  onChange: () => any;
  placeholder: string;
  fullWidth?: boolean;
};

// ADICIONAR -> formatacao de campo

export const InputField: FC<InputFieldProps> = ({
  size = "medium",
  type = "text",
  placeholder = "Digite aqui",
  fullWidth = false,
  value,
  onChange,
  name,
}) => {
  return (
    <StyledInputField
      fullWidth={fullWidth}
      name={name}
      type={type}
      typeofSize={size}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
