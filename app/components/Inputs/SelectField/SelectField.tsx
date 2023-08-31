import { FC, useState } from "react";

import { StyledSelectField } from "./SelectField.styles";
import { SelectProps } from "props/inputs";
import { palette } from "styles/defaultTheme";

export const SelectField: FC<SelectProps> = ({
  size = "large",
  fullWidth = false,
  values = [],
  margin = false,
  onChange,
  name,
  defaultValue,
  value,
  placeholder,
}) => {
  const [valueChanged, setValueChanged] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setValueChanged(value);
    return onChange && onChange(value);
  };

  return (
    <StyledSelectField
      sizeType={size}
      fullWidth={fullWidth}
      name={name}
      onChange={handleChange}
      margin={margin}
      style={{ color: !valueChanged ? "#767676" : palette.label.main }}
      value={value}
      placeholder={placeholder}
    >
      <option value="" hidden>
        {defaultValue}
      </option>
      {values?.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </StyledSelectField>
  );
};
