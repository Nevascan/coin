import { FC } from "react";
import { StyledTypography } from "./Typography.styles";
import { TypographyProps } from "./Typography.styles";

export const Typography: FC<TypographyProps> = ({
  children,
  color = "secondary",
  variant = "headline",
}) => {
  return (
    <StyledTypography variant={variant} color={color}>
      {children}
    </StyledTypography>
  );
};
