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
  mt?: number | number[];
  mb?: number | number[];
  mr?: number | number[];
  ml?: number | number[];
};
export const Typography: FC<TypographyProps> = ({
  colorType = "text",
  color = "main",
  variant = "headline",
  align = "initial",
  margin = 0,
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
