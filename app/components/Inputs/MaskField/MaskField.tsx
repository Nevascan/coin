import { FC } from "react";

import { PatternFormat } from "react-number-format";
import { StyledInputField } from "../InputField/InputField.styles";
import { InputProps } from "props/inputs";

type MaskFieldProps = InputProps;

const formatTypes = {
  cellPhone: "(##) #####-####",
  date: "##/##/####",
};

export const MaskField: FC<MaskFieldProps> = ({
  name = "",
  margin = false,
  fullWidth = false,
  size = "large",
  placeholder,
  onChange,
  value,
}) => {
  return (
    <PatternFormat
      format={formatTypes[name]}
      margin={margin}
      fullWidth={fullWidth}
      name={name}
      sizeType={size}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      customInput={StyledInputField}
    />
  );
};
