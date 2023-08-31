import { FC } from "react";
import { FormAutoCompleteProps } from "props/inputs";
import { Controller } from "react-hook-form";
import { AutoComplete } from "./AutoComplete";
import { Typography } from "app/components";

export const FormAutoComplete: FC<FormAutoCompleteProps> = ({
  size = "large",
  fullWidth = false,
  margin = false,
  name = "",
  options,
  placeholder,
  message,
  control,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, name } }) => (
          <AutoComplete
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            options={options}
            size={size}
            fullWidth={fullWidth}
            margin={margin}
          />
        )}
      />
      <Typography variant="" colorType="error" align="right">
        {message}
      </Typography>
    </>
  );
};
