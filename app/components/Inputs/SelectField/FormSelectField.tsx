import { FC } from "react";

import { Typography } from "app/components/Typography";
import { Controller } from "react-hook-form";
import { FormSelectProps } from "props/inputs";
import { SelectField } from "./SelectField";

export const FormSelectField: FC<FormSelectProps> = ({
  size = "large",
  fullWidth = false,
  margin = false,
  values = [],
  name,
  control,
  message,
  defaultValue,
  placeholder,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, name } }) => (
          <SelectField
            placeholder={placeholder}
            size={size}
            fullWidth={fullWidth}
            onChange={onChange}
            margin={margin}
            value={value}
            defaultValue={defaultValue}
            values={values}
            name={name}
          />
        )}
      />
      <Typography variant="" colorType="error" align="right">
        {message}
      </Typography>
    </>
  );
};
