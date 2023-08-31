import { FC } from "react";

import { Typography } from "app/components/Typography";
import { StyledRadioButton, StyledRadioContainer } from "./RadioButton.styles";
import { RadioButtonProps } from "props/inputs";

export const RadioButton: FC<RadioButtonProps> = ({
  size = "medium",
  margin = 0,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
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
        mt={mt}
        mb={mb}
        mr={mr}
        ml={ml}
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
