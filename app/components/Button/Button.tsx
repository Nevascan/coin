import { FC } from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  name: string;
  variant?: any;
  size?: string;
  onClick: () => any;
  fullWidth?: boolean;
  typeofColor?: string;
};

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  typeofColor = "main",
  size = "medium",
  fullWidth = false,
  name,
  onClick,
}) => {
  return (
    <StyledButton
      fullWidth={fullWidth}
      typeofSize={size}
      variant={variant}
      color={typeofColor}
      onClick={onClick}
    >
      {name}
    </StyledButton>
  );
};
