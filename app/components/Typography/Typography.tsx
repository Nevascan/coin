import { FC } from "react";
import { StyledTypography } from "./Typography.styles";

type TypographyProps = {
  variant?: string;
  color?: string;
  children: any;
  align?: string;
  margin?: number | number[];
  colorType?: string;
  style?: any;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
};
export const Typography: FC<TypographyProps> = ({
  colorType = "text",
  color = "main",
  variant = "headline",
  align = "initial",
  margin = [],
  mb = 0,
  mt = 0,
  mr = 0,
  ml = 0,
  children,
  style,
}) => {
  return (
    <StyledTypography
      colorType={colorType}
      align={align}
      margin={margin}
      mb={mb}
      mt={mt}
      mr={mr}
      ml={ml}
      variant={variant}
      color={color}
      style={style}
    >
      {children}
    </StyledTypography>
  );
};
