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
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    return onChange;
  };

  return (
    <StyledSelectField
      sizeType={size} // trocar o nome
      fullWidth={fullWidth}
      name={name}
      onChange={handleChange}
      margin={margin}
      style={{ color: !value ? "#767676" : palette.label.main }}
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
