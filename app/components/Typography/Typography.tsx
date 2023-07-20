import { FC } from "react";
import { StyledTypography } from "./Typography.styles";

type StyleProps = {
  variant?: string;
  color?: string;
  children: any;
  align?: string;
  margin?: number | number[];
  colorType?: string;
  style?: any;
};
export const Typography: FC<StyleProps> = ({
  colorType = "text",
  color = "main",
  variant = "headline",
  align = "initial",
  margin = 0,
  children,
  style,
}) => {
  return (
    <StyledTypography
      colorType={colorType}
      margin={margin}
      align={align}
      variant={variant}
      color={color}
      style={style}
    >
      {children}
    </StyledTypography>
  );
};
