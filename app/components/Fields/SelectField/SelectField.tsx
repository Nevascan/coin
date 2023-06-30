import { FC } from "react";
import { StyledSelectField } from "./SelectField.styles";

type SelectFieldProps = {
  size?: string;
  value?: any[];
  name: string;
  onChange: () => any;
  placeholder: string;
  fullWidth?: boolean;
};

export const SelectField: FC<SelectFieldProps> = ({
  size = "medium",
  placeholder = "",
  fullWidth = false,
  value = [],
  onChange,
  name,
}) => {
  return (
    <StyledSelectField
      typeofSize={size}
      fullWidth={fullWidth}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    >
      {value?.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </StyledSelectField>
  );
};
