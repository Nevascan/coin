import { FC, ChangeEventHandler } from "react";
import { StyledInputField } from "./InputField.styles";
import { Typography } from "app/components";

export type InputFieldProps = {
  size?: "small" | "medium" | "large";
  type?: "text" | "email" | "password" | "date" | "number";
  value?: string | number;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  fullWidth?: boolean;
  margin?: boolean;
  message?: string;
  register?: any;
  thousandSeparator?: string;
  decimalSeparator?: string;
  prefix?: string;
};

const formatTypes = {
  cellPhone: "(99) 99999-9999",
  date: "99/99/9999",
};

export const InputField: FC<InputFieldProps> = ({
  size = "large",
  type = "text",
  fullWidth = false,
  margin = false,
  placeholder,
  value,
  onChange,
  name,
  message,
  register,
  thousandSeparator,
  decimalSeparator,
  prefix,
}) => {
  return (
    <>
      {/* Arrumar o radio e checkbox */}
      <StyledInputField
        margin={message ? (!margin).toString() : margin.toString()}
        fullwidth={fullWidth.toString()}
        name={name}
        type={type}
        typeofsize={size}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        mask={formatTypes[name || register.name]}
        maskPlaceholder={null}
        thousandSeparator={thousandSeparator}
        decimalSeparator={decimalSeparator}
        prefix={prefix}
        {...register}
      />
      <Typography variant="" colorType="error" align="right">
        {message}
      </Typography>
    </>
  );
};
