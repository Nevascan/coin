import { FC } from "react";
import { StyledInputField } from "./InputField.styles";

export type InputFieldProps = {
  size?: "small" | "medium" | "large";
  type?: "text" | "email" | "password" | "date";
  value?: string | number;
  name?: string;
  onChange?: any; // definir melhor o tipo
  placeholder: string;
  fullWidth?: boolean;
  margin?: boolean;
};

export const InputField: FC<InputFieldProps> = ({
  size = "large",
  type = "text",
  placeholder = "",
  fullWidth = false,
  margin = false,
  value,
  onChange,
  name,
}) => {
  return (
    // Arrumar o radio e checkbox
    <StyledInputField
      margin={margin}
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
