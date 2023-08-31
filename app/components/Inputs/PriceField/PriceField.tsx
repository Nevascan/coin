import { FC } from "react";

import { NumericFormat } from "react-number-format";
import { StyledInputField } from "../InputField/InputField.styles";
import { InputProps } from "props/inputs";

type PriceFieldProps = InputProps;

export const PriceField: FC<PriceFieldProps> = ({
  fullWidth = false,
  margin = false,
  size = "large",
  name,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <NumericFormat
      margin={margin}
      fullWidth={fullWidth}
      name={name}
      sizeType={size}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      thousandSeparator="."
      decimalSeparator=","
      fixedDecimalScale
      decimalScale={2}
      prefix="R$"
      customInput={StyledInputField}
    />
  );
};
