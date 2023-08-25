import { FC } from "react";

import { Typography } from "app/components/Typography";
import { Controller } from "react-hook-form";
import { StyledSelectField } from "./SelectField.styles";
import { FormSelectProps } from "props/inputs";
import { palette } from "styles/defaultTheme";

export const FormSelectField: FC<FormSelectProps> = ({
  size = "large",
  fullWidth = false,
  margin = false,
  values = [],
  name,
  control,
  message,
  defaultValue,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <StyledSelectField
            sizeType={size}
            fullWidth={fullWidth}
            onChange={onChange}
            margin={margin}
            value={value}
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
        )}
      />
      <Typography variant="" colorType="error" align="right">
        {message}
      </Typography>
    </>
  );
};
