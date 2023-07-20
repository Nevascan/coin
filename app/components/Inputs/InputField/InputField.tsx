import { FC } from "react";
import { StyledInputField } from "./InputField.styles";

export type InputFieldProps = {
  size?: string;
  type?: string;
  value?: string | number;
  name?: string;
  onChange: () => any;
  placeholder: string;
  fullWidth?: boolean;
  margin?: boolean;
};

export const InputField: FC<InputFieldProps> = ({
  size = "medium",
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
