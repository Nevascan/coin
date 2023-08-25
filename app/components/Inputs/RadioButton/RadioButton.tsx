import { Typography } from "app/components/Typography";
import { FC, ChangeEventHandler } from "react";
import { StyledRadioButton, StyledRadioContainer } from "./RadioButton.styles";

type RadioButtonProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  margin?: number | number[];
  value?: string;
  id: string;
  label: string;
  checked?: boolean;
  name: string;
  size?: "small" | "medium";
};

export const RadioButton: FC<RadioButtonProps> = ({
  size = "medium",
  margin,
  value,
  checked,
  label,
  id,
  onChange,
  name,
}) => {
  return (
    <StyledRadioContainer>
      <StyledRadioButton
        type="radio"
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        checked={checked}
        sizeType={size}
        margin={margin}
      />
      <Typography
        variant="body2"
        style={{
          alignSelf: "self-end",
          fontSize: size === "medium" ? "15px" : "",
        }}
      >
        {label}
      </Typography>
    </StyledRadioContainer>
  );
};
