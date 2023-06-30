import { FC } from "react";
import { NumericFormat } from "react-number-format";
import { InputFieldProps } from "../InputField";
import { StyledInputField } from "../InputField/InputField.styles";

export const PriceField: FC<InputFieldProps> = ({
  name,
  placeholder = "",
  fullWidth = false,
  size = "medium",
  onChange,
  value,
}) => {
  return (
    <NumericFormat
      name={name}
      typeofSize={size}
      value={value}
      placeholder={placeholder}
      fullWidth={fullWidth}
      onChange={onChange}
      prefix="R$"
      thousandSeparator="."
      decimalSeparator=","
      fixedDecimalScale
      decimalScale={2}
      customInput={StyledInputField}
    />
  );
};
