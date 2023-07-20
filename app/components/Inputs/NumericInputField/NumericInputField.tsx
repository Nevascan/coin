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
  margin = false,
  name = "",
  onChange,
  value,
}) => {
  return (
    <PatternFormat
      margin={margin}
      name={name}
      typeofSize={size}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth={fullWidth}
      value={value}
      format={formatTypes[name]}
      customInput={StyledInputField}
    />
  );
};
