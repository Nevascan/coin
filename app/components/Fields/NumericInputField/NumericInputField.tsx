import { FC } from "react";
import { PatternFormat } from "react-number-format";
import { InputFieldProps } from "../InputField";
import { StyledInputField } from "../InputField/InputField.styles";

const formatTypes = {
  cellPhone: "(##) #####-####",
  date: "##/##/####",
};

export const NumericInputField: FC<InputFieldProps> = ({
  fullWidth = false,
  size = "medium",
  placeholder = "",
  onChange,
  value,
  name,
}) => {
  return (
    <PatternFormat
      fullWidth={fullWidth}
      name={name}
      typeofSize={size}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      format={formatTypes[name]}
      customInput={StyledInputField}
    />
  );
};
