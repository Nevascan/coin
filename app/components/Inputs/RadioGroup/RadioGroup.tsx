import { Typography } from "app/components/Typography";
import { FC, ChangeEventHandler } from "react";
import { StyledRadioGroup } from "./RadioGroup.styles";

type RadioGroupProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  margin?: number | number[];
  value?: string;
  id: string;
  label: string;
  checked?: boolean;
  name: string;
  size?: string;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  margin = 0,
  value = "",
  size = "medium",
  checked,
  label,
  id,
  onChange,
  name,
}) => {
  return (
    <>
      {/* Ajustar o size */}
      <StyledRadioGroup
        type="radio"
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        checked={checked}
        typeofsize={size}
        margin={margin}
      />
      <Typography variant="body2" id={id}>
        {label}
      </Typography>
    </>
  );
};
