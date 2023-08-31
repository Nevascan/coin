import { FC } from "react";

import { Typography } from "app/components/Typography";
import { Controller } from "react-hook-form";
import { FormInputProps } from "props/inputs";
import { MaskField } from "./MaskField";

type FormMaskFieldProps = FormInputProps;

export const FormMaskField: FC<FormMaskFieldProps> = ({
  name = "",
  margin = false,
  fullWidth = false,
  size = "large",
  placeholder,
  control,
  message,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, name } }) => (
          <MaskField
            margin={message ? !margin : margin}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            size={size}
            fullWidth={fullWidth}
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
