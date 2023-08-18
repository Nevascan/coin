import { FC, ReactNode, CSSProperties } from "react";
import { StyledTypography } from "./Typography.styles";

export type TypographyProps = {
  variant?: "display" | "headline" | "body1" | "body2" | "label" | "";
  color?: "main" | "secondary" | "light" | "";
  align?: "left" | "center" | "right" | "initial";
  colorType?: "primary" | "secondary" | "success" | "error" | "label" | "text";
  children: ReactNode;
  margin?: number | number[];
  style?: CSSProperties;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  href?: string;
};
export const Typography: FC<TypographyProps> = ({
  colorType = "text",
  color = "", // ajustar o resto das tipografias
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
