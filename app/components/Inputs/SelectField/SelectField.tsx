import { FC } from "react";
import { StyledSelectField } from "./SelectField.styles";

type SelectFieldProps = {
  size?: string;
  values: any;
  name: string;
  onChange: () => any;
  fullWidth?: boolean;
  margin?: boolean;
};

export const SelectField: FC<SelectFieldProps> = ({
  size = "medium",
  fullWidth = false,
  values = [],
  margin = false,
  onChange,
  name,
}) => {
  return (
    <StyledSelectField
      typeofSize={size}
      fullWidth={fullWidth}
      name={name}
      onChange={onChange}
      margin={margin}
    >
      {values?.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </StyledSelectField>
  );
};
