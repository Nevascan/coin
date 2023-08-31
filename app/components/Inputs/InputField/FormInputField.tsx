import { FC } from "react";

import { InputField, Typography } from "app/components";
import { Controller } from "react-hook-form";
import { FormInputProps } from "props/inputs";

export const FormInputField: FC<FormInputProps> = ({
  name = "",
  size = "large",
  fullWidth = false,
  margin = false,
  placeholder,
  control,
  message,
  type,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, name } }) => (
          <InputField
            margin={message ? !margin : margin}
            fullWidth={fullWidth}
            type={type}
            size={size}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
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
