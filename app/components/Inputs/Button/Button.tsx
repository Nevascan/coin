import { FC } from "react";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "props/inputs";

export const Button: FC<ButtonProps> = ({
  variant = "contained",
  size = "large",
  fullWidth = false,
  width = 0,
  margin = 0,
  mb = 0,
  mt = 0,
  mr = 0,
  ml = 0,
  type,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      width={width}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      onClick={onClick}
      margin={margin}
      mb={mb}
      mt={mt}
      mr={mr}
      ml={ml}
    >
      {children}
    </StyledButton>
  );
};
