import { FC } from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  children: string;
  variant?: string;
  size?: string;
  onClick: () => any;
  fullWidth?: boolean;
  width?: number | string;
  margin?: number | number[];
  mb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
};

export const Button: FC<ButtonProps> = ({
  variant = "contained",
  size = "medium",
  fullWidth = false,
  width = 0,
  margin = [],
  mb = 0,
  mt = 0,
  mr = 0,
  ml = 0,
  children,
  onClick,
}) => {
  return (
    <StyledButton
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
