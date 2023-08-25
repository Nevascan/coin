import { FC, ReactNode, CSSProperties } from "react";
import { StyledBox } from "./Box.styles";

type BoxProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export const Box: FC<BoxProps> = ({ style, children }) => {
  return <StyledBox style={style}>{children}</StyledBox>;
};
