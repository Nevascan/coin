import { FC } from "react";
import { StyledRadioGroup } from "./RadioGroup.styles";

type RadioGroupProps = {
  onChange?: () => any;
  margin?: number;
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
    // Ajustar o size
    <StyledRadioGroup size={size} margin={margin}>
      <input
        type="radio"
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        checked={checked}
        // ajustar o padding
        style={{ padding: 20 }}
      />
      <label htmlFor={id}>{label}</label>
    </StyledRadioGroup>
  );
};
