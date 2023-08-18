import { FC, ReactNode, CSSProperties } from "react";
import { StyledBox } from "./Box.styles";
import { spacing } from "styles/defaultTheme";

type BoxProps = {
  children: ReactNode;
  device?: string;
  style?: CSSProperties;
};

export const Box: FC<BoxProps> = ({ style, children }) => {
  return <StyledBox style={style}>{children}</StyledBox>;
};
