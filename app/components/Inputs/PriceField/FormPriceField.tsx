import { FC } from "react";

import { Typography } from "app/components/Typography";
import { Controller } from "react-hook-form";
import { FormInputProps } from "props/inputs";
import { PriceField } from "./PriceField";

type FormPriceFieldProps = FormInputProps;

export const FormPriceField: FC<FormPriceFieldProps> = ({
  name = "",
  size = "large",
  fullWidth = false,
  margin = false,
  control,
  placeholder,
  message,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <PriceField
            placeholder={placeholder}
            margin={message ? !margin : margin}
            onChange={onChange}
            value={value}
            size={size}
            fullWidth={fullWidth}
          />
        )}
      />
      <Typography variant="" colorType="error" align="right">
        {message}
      </Typography>
    </>
  );
};
